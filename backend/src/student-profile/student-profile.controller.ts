import { Controller } from '@nestjs/common';
import { StudentProfileService } from './student-profile.service';

@Controller('student-profile-profile')
export class StudentProfileController {
  constructor(private readonly studentProfileService: StudentProfileService) {}
}
