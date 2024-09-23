export declare interface CreateCarRequest{
    id: number,
    brand: string,
    model: string,
    year: number,
    rentalPrice: number,
    available: { type: Boolean, default: true }
}

export declare interface CreateCarResponse{
    id: number,
    brand: string,
    model: string,
    year: number,
    rentalPrice: number,
    available: { type: Boolean, default: true }
}