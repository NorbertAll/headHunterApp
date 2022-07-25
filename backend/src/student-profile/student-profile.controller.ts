import { Controller, Get, Param } from '@nestjs/common';
import { StudentProfileService } from './student-profile.service';
import { StudentProfile } from './entities/student-profile.entity';

@Controller('student-profile')
export class StudentProfileController {
  constructor(private readonly studentProfileService: StudentProfileService) {}

  @Get('/:id')
  getProfilOneStudent(@Param('id') id: string): Promise<StudentProfile> {
    return this.studentProfileService.getOneStudentProfilById(id);
  }
}
