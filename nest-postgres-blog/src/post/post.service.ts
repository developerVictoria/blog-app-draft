import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post/entities/post.entity';
import { Comment } from '../comment/entities/comment.entity';
import { title } from 'process';

@Injectable()
export class PostService {

    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>,

        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>,
    ) { }

    async create(CreatePostDto: CreatePostDto,) {
        const postData = new Post();
        postData.author = CreatePostDto.author;
        postData.title = CreatePostDto.title;
        postData.content = CreatePostDto.content;
        const new_user = await this.postRepository.save(postData);
    }

    async findAll(): Promise<Post[]> {
        return this.postRepository.find({ select: ['id', 'title', 'content', 'author'] });
    }
    async findPostById(postId: number): Promise<Post> {
        return this.postRepository.findOne({
            select: [],
            where: { id: postId },

        });
    }

    async findCommentsByPostId(postId: number): Promise<Comment[]> {
        return this.commentRepository.find({
            where: { post: postId },
        });
    }

    async update(
        id: number,
        updatePostDto: UpdatePostDto,
    ): Promise<string> {
        const existingPost = await this.findPostById(id);
        if (!existingPost) return "Post not found";

        await this.postRepository.update({ id: existingPost.id }, {
            title: updatePostDto.title,
            content: updatePostDto.content,
        })
        return "User Updated Successfully";
    }


    async remove(id: number): Promise<string> {
        const existingPost = await this.findPostById(id);
        if (!existingPost) return "Post not found";
        await this.postRepository.delete(id);
        return "Post Deleted Successfully";
    }
}
