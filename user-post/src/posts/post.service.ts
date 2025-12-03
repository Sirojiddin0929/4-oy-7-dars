import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.modul';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepo: typeof Post) {}

  create(dto) {
    return this.postRepo.create(dto);
  }
  findAll(){
    return this.postRepo.findAll()
  }
  async findOne(id:number) {
    const post=await this.postRepo.findOne({where:{id}})
    if(!post){
      throw new NotFoundException('Post not found')
    }
    return {
      message:true,
      post
    }

    
  }
  async update(id:number,dto:any){
    const post = await this.update(id,dto)
    if(!post){
      throw new NotFoundException('Post not found')
    }
    return {
      message:true,
      post
    }

  }


  async delete(id: number) {
  const deleted = await this.postRepo.destroy({ where: { id } });
  if (!deleted) {
    throw new NotFoundException('Post topilmadi');
  }
  return { message: 'Post ochirildi' };
}

}
