import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentInfo } from '../../types/student/student-info';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('/info')
  getInfoAllStudent(): Promise<StudentInfo[]> {
    return this.studentService.getAllStudentInfo();
  }

  @Post('/')
  addStudent(@Body() newStudent: CreateStudentDto[]): Promise<string> {
    return this.studentService.addStudent(newStudent);
  }
}
