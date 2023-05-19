import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateStarterDto } from './dto/create-starter.dto';

@Controller('starter')
export class StarterController {

  // GET /starter/:id --> { id: }
  @Get(":id")
  getStarter(@Param("id") id: string) {
    return { id };
  }

  // Get query /starter?type=<what to query>
  @Get()
  getStarterQuery(@Query("type") type: string) {
    return [{ type }];
  }

  // GET /starter --> []
  @Get()
  getStarters() {
    return [
      { userId: "1"},
      { userId: "2"}
    ];
  }

  // POST /starter
  @Post()
  createStarterDataItem(@Body() createStarterDto: CreateStarterDto) {
    return {
      name: createStarterDto.name
    }
  }
}
