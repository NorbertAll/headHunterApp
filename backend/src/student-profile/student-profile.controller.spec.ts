import { Test, TestingModule } from '@nestjs/testing';
import { StudentProfileController } from './student-profile.controller';
import { StudentProfileService } from './student-profile.service';

describe('StudentProfileController', () => {
  let controller: StudentProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentProfileController],
      providers: [StudentProfileService],
    }).compile();

    controller = module.get<StudentProfileController>(StudentProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
