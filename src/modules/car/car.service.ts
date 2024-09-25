import { Injectable } from "@nestjs/common";
import { PgService } from "@postgres";
import { CreateCarRequest, CreateCarResponse } from "./interfaces";
import { ApiFeature } from "@utils";

export declare interface Car {
    id: number,
    brand: string,
    model: string,
    year: number,
    rentalPrice: number,
    available: { type: Boolean, default: true }
}

@Injectable()
export class CarService {
    constructor(private readonly postgres: PgService) { }

    async getAllCars(queries: Record<string, any>): Promise<any> {
        const query = new ApiFeature('cars')
            .paginate(+queries?.page || 1, +queries.limit || 10)
            .limitFields(queries?.fields ? queries.fields.split(','):['*'])
            .sort(queries?.sort)
            .getQuery();

        console.log(query);
        const data = await this.postgres.fetchData(query.queryString);

        return {
            limit: query.limit,
            page: query.page,
            data
        };
    }
    async getSingleCar(carId: number): Promise<any> {
        return await this.postgres.fetchData("SELECT * FROM car WHERE id=$1", carId);
    }
    async createCar(payload: CreateCarRequest): Promise<any> {
        const newCar = await this.postgres.fetchData(
            `INSERT INTO car(brand, model,year, rentalPrice, available) VALUES ($1, $2, $3, $4, $5)`,
            payload.brand,
            payload.model,
            payload.year,
            payload.rentalPrice,
            payload.available
        );
        return newCar;
    }
}