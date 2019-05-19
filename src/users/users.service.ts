import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTbl } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserTbl)
    private readonly userRepository: Repository<UserTbl>,
  ) {}

  async findAll(): Promise<UserTbl[]> {
    return await this.userRepository.find();
  }

  async create(user: UserTbl): Promise<UserTbl> {
    const userEntity = this.userRepository.create(user);
    return await this.userRepository.save(userEntity);
  }
}
