import { HttpException, Injectable } from '@nestjs/common';
import { CreateHrUserDto } from './dto/create-hrUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HrUser } from './entities/hrUser.entity';

@Injectable()
export class HrUserService {
  constructor(
    @InjectRepository(HrUser) private hrRepository: Repository<HrUser>,
  ) {}


  //All endpoints and logic into Student


  async createHr(hrUser: CreateHrUserDto) {
    try {
      const newHrUser = this.hrRepository.create(hrUser);
      await this.hrRepository.save(newHrUser);
      console.log(newHrUser);
      return newHrUser;
    } catch (err) {
      if (err === 1062) {
        throw 500;
      } else {
        throw new HttpException(`user with this email already exists`, 400);
      }
    }
  }

  async findAll() {
    return this.hrRepository.find();
  }

  async findHrUserById(id: string): Promise<HrUser> {
    return this.hrRepository.findOneOrFail({ where: { id } });
  }
}
