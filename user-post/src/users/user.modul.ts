import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Post } from 'src/posts/post.modul';

@Table
export class User extends Model<User> {
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @HasMany(() => Post)
  posts: Post[];
}
