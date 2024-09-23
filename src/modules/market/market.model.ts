export interface Market {
    id: number;
    name: string;
    location: string;
    branches: Branch[];
}

export interface Branch {
    id: number;
    name: string;
    address: string;
}
