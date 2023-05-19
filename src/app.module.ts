import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarterModule } from './starter/starter.module';

@Module({
  imports: [StarterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
