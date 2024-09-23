import { Module } from "@nestjs/common";
import { PgService } from "src/postgres";

@Module({
    providers: [PgService,],
    controllers: [CarController]
})
export class CarModule { }