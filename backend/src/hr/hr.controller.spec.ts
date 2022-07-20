import { Test, TestingModule } from '@nestjs/testing';
import { HrController } from './hr.controller';
import { HrService } from './hr.service';

describe('HrController', () => {
  let controller: HrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HrController],
      providers: [HrService],
    }).compile();

    controller = module.get<HrController>(HrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
