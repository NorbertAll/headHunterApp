import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { StudentProfile } from './entities/student-profile.entity';

@Injectable()
export class StudentProfileService {
  constructor(
    @InjectRepository(StudentProfile)
    private studentProfileRepository: Repository<StudentProfile>,
  ) {}

  async getOneStudentProfilById(id: string): Promise<StudentProfile> {
    const result = await getConnection()
      .createQueryBuilder(StudentProfile, 't0')
      .select()
      .where('studentId=:id', { id: id })
      .getOne();
    return result;
  }
}
