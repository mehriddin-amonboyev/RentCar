import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { PgService } from "src/postgres";
import { CarController } from "./car.controller";
import { CarService } from "./car.service";
import { LoggerMiddleware } from "src/middleware";

@Module({
    providers: [PgService, CarService],
    controllers: [CarController]
})
export class CarModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes({
                path: "cars",
                method: RequestMethod.ALL
            });
    }
}

