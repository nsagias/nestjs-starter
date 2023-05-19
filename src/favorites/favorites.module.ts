import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesResolver } from './favorites.resolver';

@Module({
  providers: [FavoritesResolver, FavoritesService]
})
export class FavoritesModule {}
