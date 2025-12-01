import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostsController } from './post.controller';
import { PostsService } from './post.service';
import { Post } from './post.modul';
import { User } from 'src/users/user.modul';

@Module({
  imports: [
    SequelizeModule.forFeature([Post, User])
  ],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService]
})
export class PostsModule {}
