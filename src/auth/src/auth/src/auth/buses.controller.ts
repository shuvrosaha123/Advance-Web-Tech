import { Controller, Get, Post, Body } from '@nestjs/common';
import { BusesService } from './buses.service';

@Controller('buses')
export class BusesController {
  constructor(private service: BusesService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.createBus(body);
  }
}
