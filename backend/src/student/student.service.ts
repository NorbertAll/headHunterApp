import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { Student } from './entities/student.entity';
import { StudentInfo } from '../../types/student/student-info';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService {
  async getAllStudentInfo(): Promise<StudentInfo[]> {
    const result = await getConnection()
      .createQueryBuilder(Student, 't0')
      .select('t0.id', 'id')
      .addSelect(`t0.email`, 'email')
      .addSelect(`t0.courseCompletion`, 'courseCompletion')
      .addSelect(`t0.courseEngagement`, 'courseEngagement')
      .addSelect(`t0.projectDegree`, 'projectDegree')
      .addSelect(`t0.teamProjectDegree`, 'teamProjectDegree')
      .addSelect(`t0.bonusProjectUrls`, 'bonusProjectUrls')
      .addSelect(`t0.status`, 'status')
      .addSelect(`t1.phone`, 'phone')
      .addSelect(`t1.firstName`, 'firstName')
      .addSelect(`t1.lastName`, 'lastName')
      .addSelect(`t1.githubUsername`, 'githubUsername')
      .addSelect(`t1.portfolioUrls`, 'portfolioUrls')
      .addSelect(`t1.projectUrls`, 'projectUrls')
      .addSelect(`t1.bio`, 'bio')
      .addSelect(`t1.expectedTypeWork`, 'expectedTypeWork')
      .addSelect(`t1.targetWorkCity`, 'targetWorkCity')
      .addSelect(`t1.expectedContractType`, 'expectedContractType')
      .addSelect(`t1.expectedSalary`, 'expectedSalary')
      .addSelect(`t1.canTakeApprenticeship`, 'canTakeApprenticeship')
      .addSelect(`t1.monthsOfCommercialExp`, 'monthsOfCommercialExp')
      .addSelect(`t1.education`, 'education')
      .addSelect(`t1.workExperience`, 'workExperience')
      .addSelect(`t1.courses`, 'courses')
      .leftJoin('StudentProfile', 't1', 't0.id=t1.studentId')
      .getRawMany();
    return result;
  }

  async addStudent(newStudent: CreateStudentDto[]): Promise<string> {
    for (const item of newStudent) {
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Student)
        .values({
          email: item.email,
          courseCompletion: item.courseCompletion,
          courseEngagement: item.courseEngagement,
          projectDegree: item.projectDegree,
          teamProjectDegree: item.projectDegree,
          bonusProjectUrls: item.bonusProjectUrls,
        })
        .execute();
    }

    return 'ok';
  }
}
