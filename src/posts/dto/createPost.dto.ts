import { IsNotEmpty, IsString, MaxLength, isString } from "class-validator";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    contents: string;

    @IsString()
    @IsNotEmpty()
    userId: string;
}   