import { Controller, Get, Param, Query } from '@nestjs/common';

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
}
