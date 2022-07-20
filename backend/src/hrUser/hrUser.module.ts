import { Module } from '@nestjs/common';
import { HrUserService } from './hrUser.service';
import { HrUserController } from './hrUser.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HrUser } from './entities/hrUser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HrUser])],
  controllers: [HrUserController],
  providers: [HrUserService],
})
export class HrUserModule {}
