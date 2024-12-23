import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    id?: string;
    title: string;
    content: string;
    comments?: number[];
    author?: number;
}
