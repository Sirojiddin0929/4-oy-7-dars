import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Post } from 'src/posts/post.modul';

@Table
export class User extends Model<
  User,
  { name: string; age: number; location: number; posts: number }
> {
  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @Column({ type: DataType.NUMBER })
  declare age: number;

  @Column({ type: DataType.STRING })
  declare location: string;

  @HasMany(() => Post)
  declare posts: Post[];
}
