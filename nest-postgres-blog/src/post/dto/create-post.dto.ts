import {
    IsArray,
    IsNotEmpty,
    IsNumber,
    IsString,
} from 'class-validator';

// create-user-dto
export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    author: number;
}