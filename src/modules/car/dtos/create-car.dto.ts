import { IsInt, IsNumber, IsString, Max, Min, isBoolean } from 'class-validator';
import { CreateCarRequest } from '../interfaces';

export class CreateCarDto implements CreateCarRequest {
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
    rating: number;

    @isBoolean()
    available: {
        type: Boolean;
        default: true;
    };
}