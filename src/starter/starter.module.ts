import { Module } from '@nestjs/common';
import { StarterController } from './starter.controller';
import { StarterService } from './starter.service';

@Module({
  controllers: [StarterController],
  providers: [StarterService]
})
export class StarterModule {}
