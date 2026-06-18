import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BusesModule } from './buses/buses.module';
import { BookingsModule } from './bookings/bookings.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AuthModule, UsersModule, BusesModule, BookingsModule],
  providers: [PrismaService],
})
export class AppModule {}
