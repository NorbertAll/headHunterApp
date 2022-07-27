import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpStatus,
  ImATeapotException,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { HrUserService } from './hrUser.service';
import { CreateHrUserDto } from './dto/create-hrUser.dto';
import { GetListOfHrResponse, GetOneHrResponse } from '../../types';
//import { CheckAgePipe } from '../pipes/check-age.pipe';
import { PasswordProtectGuard } from '../guards/password-protect.guard';
import { UsePassword } from '../decorators/use-password.decorator';
import { MyTimeoutInterceptor } from 'src/interceptors/my-timeout.interceptor';

@Controller('hr')
export class HrUserController {
  constructor(private readonly hrService: HrUserService) {}

  // admin is able to create HrUser
  @Post('/admin')
  @UseGuards(PasswordProtectGuard)
  create(@Body(ValidationPipe) createHrDto: CreateHrUserDto) {
    return this.hrService.createHr(createHrDto);
  }

  // admin is able to get list of all HrUsers
  @Get('/admin')
  @UseGuards(PasswordProtectGuard)
  @UsePassword('passToGetAllUsers')
  @UseInterceptors(MyTimeoutInterceptor)
  findAll(): Promise<GetListOfHrResponse> {
    return this.hrService.findAll();
  }

  // admin is able to get HrUser by id
  @Get('/admin/:id')
  @UseGuards(PasswordProtectGuard)
  @UsePassword('passToGetOneUser')
  findOne(@Param('id') id: string): Promise<GetOneHrResponse> {
    return this.hrService.findHrUserById(id);
  }

  // @Get('/test')
  // test() {
  //   throw new Error('Oh no!');
  // }
}
