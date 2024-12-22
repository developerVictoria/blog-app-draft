import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Repository } from 'typeorm';
import { Post } from '../post/entities/post.entity';
import { Comment } from '../comment/entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) { }

  async create(
    CreateCommentDto: CreateCommentDto,
  ): Promise<Comment> {
    const commentData =
      await this.commentRepository.create(
        CreateCommentDto,
      );
    return this.commentRepository.save(commentData);
  }
  async findCommentById(commentId: number): Promise<Comment> {
    return this.commentRepository.findOne({
      where: { id: commentId },
    });
  }

  async remove(id: number): Promise<string> {
    const existingPost = await this.findCommentById(id);
    if (!existingPost) return "Comment not found";
    await this.commentRepository.delete(id);
    return "Comment Deleted Successfully";
  }
}
