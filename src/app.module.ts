import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarterModule } from './starter/starter.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [StarterModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
