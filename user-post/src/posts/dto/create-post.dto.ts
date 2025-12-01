import { IsString, IsNumber, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsNumber()
  userId: number;
}
