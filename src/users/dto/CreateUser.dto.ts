import { IsOptional, IsString } from 'class-validator'

export class CreateUSerSettignsDto {
    receiveNotifications?: boolean;
    receiveEmails?: boolean;
    receiveSMS?: boolean;
}

export class CreateUserDto {
    @IsString()
    @IsOptional()
    username?: string;

    @IsString()
    @IsOptional()
    email?: string;

    settings?: CreateUSerSettignsDto;
}