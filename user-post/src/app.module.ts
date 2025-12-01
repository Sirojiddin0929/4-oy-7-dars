import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.modul';
import { Post } from './posts/post.modul';
import { UsersModule } from './users/user.module';
import { PostsModule } from './posts/post.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [User, Post],
      autoLoadModels: true,
      synchronize: true,
      logging: false,
    }),
    UsersModule,
    PostsModule
  ],
})
export class AppModule {}
