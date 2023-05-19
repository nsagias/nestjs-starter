import { CreateEmailInput } from './create-email.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateEmailInput extends PartialType(CreateEmailInput) {
  id: number;
}
