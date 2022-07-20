import { PartialType } from '@nestjs/mapped-types';
import { CreateHrDto } from './create-hr.dto';

export class UpdateHrDto extends PartialType(CreateHrDto) {}
