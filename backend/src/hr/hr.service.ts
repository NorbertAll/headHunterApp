import { Injectable } from '@nestjs/common';
import { CreateHrDto } from './dto/create-hr.dto';
import { UpdateHrDto } from './dto/update-hr.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hr } from './entities/hr.entity';

@Injectable()
export class HrService {
  constructor(@InjectRepository(Hr) private hrRepository: Repository<Hr>) {}

  async createHr(createHrDto: CreateHrDto) {
    const newHrUser = this.hrRepository.create(createHrDto);
    await this.hrRepository.save(newHrUser);
    console.log(newHrUser);
    return newHrUser;
  }

  findAll() {
    return `This action returns all hr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hr`;
  }

  update(id: number, updateHrDto: UpdateHrDto) {
    return `This action updates a #${id} hr`;
  }

  remove(id: number) {
    return `This action removes a #${id} hr`;
  }
}
