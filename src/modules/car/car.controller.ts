import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Car, CarService } from './car.service';


@Controller('Cars')
export class CarController {
    constructor(private readonly CarService: CarService) { }

    @Get()
    getAllCars(): Car[] {
        return this.CarService.getAllCars();
    }

    @Get(':id')
    getCarById(@Param('id') id: number): Car {
        return this.CarService.getCarById(id);
    }

    @Post()
    createCar(
        @Body('name') name: string,
        @Body('location') location: string
    ): Car {
        return this.CarService.createCar(name, location);
    }

    @Put(':id')
    updateCar(
        @Param('id') id: number,
        @Body('name') name: string,
        @Body('location') location: string,
    ): Car {
        return this.CarService.updateCar(id, name, location);
    }

    @Delete(':id')
    deleteCar(
        @Param('id') id: number
    ): void {
        this.CarService.deleteCar(id);
    }

    @Post(':id/branches')
    addBranchToCar(
        @Param('id') CarId: number,
        @Body('name') branchName: string,
        @Body('address') branchAddress: string,
    ): Branch {
        return this.CarService.addBranchToCar(CarId, branchName, branchAddress);
    }
}
