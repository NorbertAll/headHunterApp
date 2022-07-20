import { Module } from '@nestjs/common';
import { HrService } from './hr.service';
import { HrController } from './hr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hr } from './entities/hr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hr])],
  controllers: [HrController],
  providers: [HrService],
})
export class HrModule {}
