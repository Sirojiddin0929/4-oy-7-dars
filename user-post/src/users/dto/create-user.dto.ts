import { IsNotEmpty, IsString, MinLength,IsNumber } from 'class-validator';

export class CreateUserDto {
  
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age:number;

  @IsString()
  @IsNotEmpty()
  location:string


}
