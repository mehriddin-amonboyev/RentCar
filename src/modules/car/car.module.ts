import { Module } from "@nestjs/common";
import { PgService } from "src/postgres";
import { CarController } from "./car.controller";
import { CarService } from "./car.service";

@Module({
    providers: [PgService,CarService],
    controllers: [CarController]
})
export class CarModule { }