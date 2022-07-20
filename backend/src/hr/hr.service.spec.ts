import { Test, TestingModule } from '@nestjs/testing';
import { HrService } from './hr.service';

describe('HrService', () => {
  let service: HrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HrService],
    }).compile();

    service = module.get<HrService>(HrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
