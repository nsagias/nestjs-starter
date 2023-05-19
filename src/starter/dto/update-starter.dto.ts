import { PartialType } from '@nestjs/mapped-types';
import { CreateStarterDto } from './create-starter.dto';

export class UpdateStarterDto extends PartialType(CreateStarterDto) {}
