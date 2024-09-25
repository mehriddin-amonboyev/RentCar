import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CarModule } from '@module';
import dbConfig from './config/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],
    }),
    CarModule
  ],
  // controllers: [CarController],
  // providers:[CarService],
})
export class AppModule { }
