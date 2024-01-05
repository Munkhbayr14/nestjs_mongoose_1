import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import mongoose from "mongoose";
import { UpdateUserDto } from "./dto/UpdateUser.dto";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log(CreateUserDto);
        return this.usersService.createUser(createUserDto)
    }

    @Get()
    getUsers() {
        return this.usersService.getsUsers();
    }

    @Get(':id')
    async getUserById(@Param("id") id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new NotFoundException("Xэрэглэгч олдсонгүй!!!");
        const findUser = await this.usersService.getUserById(id)
        if (!findUser) throw new NotFoundException("user not found");
        return "Xэрэглэгч:" + findUser
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new NotFoundException("id-тай хэрэглэгч олдсонгүй!!!");
        const updateUser = await this.usersService.updateUser(id, updateUserDto);
        if (!updateUser) throw new NotFoundException("Xэрэглэгч олдсонгүй!!!");
        return "uurchlugdsun" + updateUser
    }

    @Delete(":id")
    async deleteUser(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new NotFoundException("ID invalid");
        const deletedUser = await this.usersService.deleteUser(id);
        if (!deletedUser) throw new NotFoundException("kimchi  obso!!!");
        return "ustagsan";
    }
}