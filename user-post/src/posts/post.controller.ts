import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PostsService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  create(@Body() dto: CreatePostDto) {
    return this.postsService.create(dto);
  }
  @Get()
  findAll(){
    return this.postsService.findAll()
  }
  @Get(':id')
  async findOne(@Param('id',ParseIntPipe) id:number){
    return await this.postsService.findOne(id)
  }
  @Patch(':id')
  async update(@Param('id') id:number, @Body() dto){
    return await this.postsService.update(Number(id),dto)
  }

  @Delete(':id')
  async delete(@Param('id',ParseIntPipe) id: number) {
    return  await this.postsService.delete(id);
  }
}
