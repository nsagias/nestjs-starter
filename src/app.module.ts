import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarterModule } from './starter/starter.module';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';
import { FavoritesModule } from './favorites/favorites.module';
import { WeatherModule } from './weather/weather.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [StarterModule, UsersModule, EmailModule, FavoritesModule, WeatherModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
