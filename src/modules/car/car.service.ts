import { Injectable } from "@nestjs/common";
import { PgService } from "src/postgres";
import { CreateCarRequest, CreateCarResponse } from "./interfaces";

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

    async getAllCars(): Promise<any[]> {
        return await this.postgres.fetchData("SELECT * FROM car")
    }
    async getSingleCar(carId: number): Promise<any> {
        return await this.postgres.fetchData("SELECT *FROM car WHERE id=$1", carId);
    }

    createCar(payload: CreateCarRequest): CreateCarResponse {
        const newCar = {
            id: this.createCar.at(-1)?.id + 1 || 1,
        }
        this.postgres.
        return newCar;
    }
}

// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/sequelize';
// import { Car } from './car.model';
// import { CreateCarDto } from './dto/create-car.dto';
// import { UpdateCarDto } from './dto/update-car.dto';

// @Injectable()
// export class CarService {
//   constructor(
//     @InjectModel(Car)
//     private carModel: typeof Car,
//   ) {}

//   async findAll(): Promise<Car[]> {
//     return this.carModel.findAll({ where: { available: true } });
//   }

//   async findOne(id: number): Promise<Car> {
//     const car = await this.carModel.findByPk(id);
//     if (!car) {
//       throw new NotFoundException(`Car with ID ${id} not found`);
//     }
//     return car;
//   }

//   async create(createCarDto: CreateCarDto): Promise<Car> {
//     return this.carModel.create(createCarDto);
//   }

//   async update(id: number, updateCarDto: UpdateCarDto): Promise<Car> {
//     const [updatedRows] = await this.carModel.update(updateCarDto, { where: { id } });
//     if (updatedRows === 0) {
//       throw new NotFoundException(`Car with ID ${id} not found`);
//     }
//     return this.findOne(id);
//   }

//   async remove(id: number): Promise<void> {
//     const deletedRows = await this.carModel.destroy({ where: { id } });
//     if (deletedRows === 0) {
//       throw new NotFoundException(`Car with ID ${id} not found`);
//     }
//   }
// }
