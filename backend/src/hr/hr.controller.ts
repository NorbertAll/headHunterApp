import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { HrService } from './hr.service';
import { CreateHrDto } from './dto/create-hr.dto';
import { UpdateHrDto } from './dto/update-hr.dto';

@Controller('hr')
export class HrController {
  constructor(private readonly hrService: HrService) {}

  @Post('/admin')
  create(@Body(ValidationPipe) createHrDto: CreateHrDto) {
    return this.hrService.createHr(createHrDto);
  }

  @Get()
  findAll() {
    return this.hrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hrService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHrDto: UpdateHrDto) {
    return this.hrService.update(+id, updateHrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hrService.remove(+id);
  }
}
