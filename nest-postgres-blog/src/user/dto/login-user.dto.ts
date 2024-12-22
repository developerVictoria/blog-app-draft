import {
    IsEmail,
    IsNotEmpty,
    IsString,

} from 'class-validator';

// create-user-dto
export class LoginUserDto {
    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}