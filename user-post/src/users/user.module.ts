import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { User } from './user.modul';
import { Post } from 'src/posts/post.modul';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Post])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
