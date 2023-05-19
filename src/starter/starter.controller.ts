import { Controller, Get } from '@nestjs/common';

@Controller('starter')
export class StarterController {
  // GET /users  --> []
  @Get()
  getStarters() {
    return [
      { userId: "1"},{ userId: "2"}
    ];
  }
}
