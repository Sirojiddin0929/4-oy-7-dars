import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.modul';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepo: typeof Post) {}

  create(dto) {
    return this.postRepo.create(dto);
  }

  delete(id: number) {
    return this.postRepo.destroy({ where: { id } });
  }
}
