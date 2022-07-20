import { Test, TestingModule } from '@nestjs/testing';
import { HrUserService } from './hrUser.service';

describe('HrService', () => {
  let service: HrUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HrUserService],
    }).compile();

    service = module.get<HrUserService>(HrUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
