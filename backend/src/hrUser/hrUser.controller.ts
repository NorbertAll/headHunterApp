import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { HrUserService } from './hrUser.service';
import { CreateHrUserDto } from './dto/create-hrUser.dto';
import { GetListOfHrResponse, GetOneHrResponse } from '../../types/hr/hrUser';


//All endpoints and logic into Student


@Controller('hr')
export class HrUserController {
  constructor(private readonly hrService: HrUserService) {}

  // admin is able to create HrUser
  @Post('/admin')
  create(@Body(ValidationPipe) createHrDto: CreateHrUserDto) {
    return this.hrService.createHr(createHrDto);
  }

  // admin is able to get list of all HrUsers
  @Get('/admin')
  findAll(): Promise<GetListOfHrResponse> {
    return this.hrService.findAll();
  }

  // admin is able to get HrUser by id
  @Get('/admin/:id')
  findOne(@Param('id') id: string): Promise<GetOneHrResponse> {
    return this.hrService.findHrUserById(id);
  }
}
