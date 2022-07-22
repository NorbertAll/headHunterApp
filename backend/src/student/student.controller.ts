import { Controller, Get } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentInfo } from '../../types/student/student-info';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('/info')
  getInfoAllStudent(): Promise<StudentInfo[]> {
    return this.studentService.getAllStudentInfo();
  }
}
