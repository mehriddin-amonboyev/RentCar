export declare interface CreateCarDto{
    id: number,
    brand: string,
    model: string,
    year: number,
    rentalPrice: number,
    available: { type: Boolean, default: true }
}