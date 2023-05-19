import { Controller, Get, Param } from '@nestjs/common';

@Controller('starter')
export class StarterController {
  // GET /users  --> []
  @Get()
  getStarters() {
    return [
      { userId: "1"},{ userId: "2"}
    ];
  }
  @Get(":id")
  getStarter(@Param("id") id: string) {
    return { id };
  }
}
