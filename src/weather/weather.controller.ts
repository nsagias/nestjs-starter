import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WeatherService } from './weather.service';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { UpdateWeatherDto } from './dto/update-weather.dto';

@Controller()
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @MessagePattern('createWeather')
  create(@Payload() createWeatherDto: CreateWeatherDto) {
    return this.weatherService.create(createWeatherDto);
  }

  @MessagePattern('findAllWeather')
  findAll() {
    return this.weatherService.findAll();
  }

  @MessagePattern('findOneWeather')
  findOne(@Payload() id: number) {
    return this.weatherService.findOne(id);
  }

  @MessagePattern('updateWeather')
  update(@Payload() updateWeatherDto: UpdateWeatherDto) {
    return this.weatherService.update(updateWeatherDto.id, updateWeatherDto);
  }

  @MessagePattern('removeWeather')
  remove(@Payload() id: number) {
    return this.weatherService.remove(id);
  }
}
