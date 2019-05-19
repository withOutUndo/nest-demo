import {
  Controller,
  Get,
  Req,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { UserTbl } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Req() request: Request) {
    return this.usersService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() user: UserTbl) {
    console.log(user);
    return this.usersService.create(user);
  }
}
