import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaterModule } from './stater/stater.module';
import { StarterModule } from './starter/starter.module';

@Module({
  imports: [StaterModule, StarterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
