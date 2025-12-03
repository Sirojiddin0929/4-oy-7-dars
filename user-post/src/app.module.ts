import { Module, UnsupportedMediaTypeException } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.modul';
import { Post } from './posts/post.modul';
import { UsersModule } from './users/user.module';
import { PostsModule } from './posts/post.module';
import { diskStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const ext = file.mimetype.split('/')[1]; 
          const filename = `${Date.now()}.${ext}`;
          cb(null, filename);
        },
      }),
      fileFilter: (req, file, cb) => {
        const allowedMimes = ['image/jpeg', 'image/png', 'application/pdf'];
        if (!allowedMimes.includes(file.mimetype)) {
          return cb(
            new UnsupportedMediaTypeException('Bu file typega ruxsat yoq'),
            false,
          );
        }
        cb(null, true);
      },
      limits: { fileSize: 1024 * 1024 * 3 }, 
    }),
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
    PostsModule,
  ],
  controllers:[AppController],
  providers:[AppService]
})
export class AppModule {}
