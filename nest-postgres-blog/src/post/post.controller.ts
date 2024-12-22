import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';



@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }
  @Get(':id/comments')
  async findCommentsByPostId(@Param('id') postId: string) {
    return this.postService.findCommentsByPostId(+postId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findPostById(+id);
  }


  @Patch(':id')
  async update(@Param('id') id: string, @Body() UpdatePostDto: UpdatePostDto) {
    return this.postService.update(+id, UpdatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
