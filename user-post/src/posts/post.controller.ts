import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  create(@Body() dto: CreatePostDto) {
    return this.postsService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.postsService.delete(id);
  }
}
