import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.modul';
import { Post } from 'src/posts/post.modul';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepo: typeof User,
    @InjectModel(Post) private postRepo: typeof Post,
  ) {}

  create(dto) {
    return this.userRepo.create(dto);
  }

  findAll() {
    return this.userRepo.findAll({ include: [Post] });
  }

  async findOne(id: number) {
    console.log(id);
    
    const user = await this.userRepo.findOne({
      where: { id },
      include: [Post],
    });
    console.log(user);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(id: number, dto) {
    const user = await this.userRepo.findByPk(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    await user.update(dto);
    return user;
  }

  async deleteUser(id: number) {
    const posts = await this.postRepo.findAll({ where: { userId: id } });

    if (posts.length > 0) {
      throw new BadRequestException(
        'Bu userda post bor. Oldin postlarni ochirishingiz kerak.',
      );
    }

    return this.userRepo.destroy({ where: { id } });
  }
}
