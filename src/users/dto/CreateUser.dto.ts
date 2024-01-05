import { IsNotEmpty, IsOptional, IsString } from 'class-validator'


export class CreateUserDto {
    @IsString()
    @IsOptional()
    username?: string;

    @IsString()
    @IsOptional()
    email?: string;


}