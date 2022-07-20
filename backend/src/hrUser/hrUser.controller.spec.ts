import { Test, TestingModule } from '@nestjs/testing';
import { HrUserController } from './hrUser.controller';
import { HrUserService } from './hrUser.service';

describe('HrController', () => {
  let controller: HrUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HrUserController],
      providers: [HrUserService],
    }).compile();

    controller = module.get<HrUserController>(HrUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
