import { Module } from '@nestjs/common';
import { StarterController } from './starter.controller';

@Module({
  controllers: [StarterController]
})
export class StarterModule {}
