import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BusesService {
  constructor(private prisma: PrismaService) {}

  createBus(data: any) {
    return this.prisma.bus.create({ data });
  }

  getAll() {
    return this.prisma.bus.findMany();
  }
}
