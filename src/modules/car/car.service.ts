import { Injectable } from "@nestjs/common";
import { PgService } from "src/postgres";

export declare interface Car{
    id: number,
    brand: string,
    model: string,
    year: number,
    rentalPrice: number,
    available: { type: Boolean,default: true}
}

@Injectable()
export class CarService{
    constructor(private readonly postgres: PgService){}

    async getAllCars():Promise<any[]>{
        return await this.postgres.fetchData("SELECT * FROM cars")
    }
}
