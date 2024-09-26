import { IsBoolean, IsInt, IsNumber, IsString, Max, Min } from 'class-validator';
import { CreateCarRequest } from '../interfaces';
import { boolean } from 'joi';

export class CreateCarDto  {
    @IsString()
    brand: string;

    @IsString()
    model: string;

    @IsInt()
    @Max(new Date().getFullYear())
    @Min(1800)
    year: number;

    @IsNumber()
    @Min(100)
    @Max(50000)
    rentalPrice: number;

    @IsBoolean()
    available: {
        type: Boolean;
        default: true;
    };
}