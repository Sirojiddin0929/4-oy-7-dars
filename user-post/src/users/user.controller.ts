import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id:string){
    return await this.usersService.findOne(+id)
    }


  @Patch(':id')
  async update(@Param('id') id:number, @Body() dto){
    return await this.usersService.update(Number(id),dto)

   }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id:number) {
    return await this.usersService.deleteUser(id);
  }
}
