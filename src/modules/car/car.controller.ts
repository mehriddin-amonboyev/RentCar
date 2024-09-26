import { Controller, Get, Post, Put, Delete, Param, Body, Query,HttpCode,HttpStatus } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dtos';

@Controller({
    path: 'cars'
})
export class CarController {
    constructor(private readonly CarService: CarService) { }

    @Get()
    @HttpCode(HttpStatus.ACCEPTED)
    async getAllCars(@Query() queries: Record<string, string>): Promise<any[]> {
        return await this.CarService.getAllCars(queries);
    }

    @Get(':id')
    async getSingleCar(@Param('id') id: number): Promise<any> {
        return await this.CarService.getSingleCar(+id);
    }

    @Post()
    async addCar(
        @Body() createCarData: CreateCarDto): Promise<any> {
        return await this.CarService.createCar(createCarData);
    }

    // @Put(':id')
    // updateCar(
    //     @Param('id') id: number,
    //     @Body('name') name: string,
    //     @Body('location') location: string,
    // ): Car {
    //     return this.CarService.updateCar(id, name, location);
    // }

    // @Delete(':id')
    // deleteCar(
    //     @Param('id') id: number
    // ): void {
    //     this.CarService.deleteCar(id);
    // }

    // @Post(':id/branches')
    // addBranchToCar(
    //     @Param('id') CarId: number,
    //     @Body('name') branchName: string,
    //     @Body('address') branchAddress: string,
    // ): Branch {
    //     return this.CarService.addBranchToCar(CarId, branchName, branchAddress);
    // }
}
