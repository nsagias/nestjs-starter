import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmailService } from './email.service';
import { CreateEmailInput } from './dto/create-email.input';
import { UpdateEmailInput } from './dto/update-email.input';

@Resolver('Email')
export class EmailResolver {
  constructor(private readonly emailService: EmailService) {}

  @Mutation('createEmail')
  create(@Args('createEmailInput') createEmailInput: CreateEmailInput) {
    return this.emailService.create(createEmailInput);
  }

  @Query('email')
  findAll() {
    return this.emailService.findAll();
  }

  @Query('email')
  findOne(@Args('id') id: number) {
    return this.emailService.findOne(id);
  }

  @Mutation('updateEmail')
  update(@Args('updateEmailInput') updateEmailInput: UpdateEmailInput) {
    return this.emailService.update(updateEmailInput.id, updateEmailInput);
  }

  @Mutation('removeEmail')
  remove(@Args('id') id: number) {
    return this.emailService.remove(id);
  }
}
