import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  bookSeat(userId: string, busId: string, seatNo: number) {
    return this.prisma.booking.create({
      data: { userId, busId, seatNo },
    });
  }

  getUserBookings(userId: string) {
    return this.prisma.booking.findMany({
      where: { userId },
      include: { bus: true },
    });
  }
}
