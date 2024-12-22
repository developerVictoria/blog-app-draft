import {
    IsArray,
    IsNotEmpty,
    IsNumber,
    IsString,
} from 'class-validator';


export class CreateCommentDto {
    @IsNotEmpty()
    @IsString()
    text: string;

    @IsNotEmpty()
    @IsNumber()
    author: number;

    @IsNotEmpty()
    @IsNumber()
    post: number;

}
