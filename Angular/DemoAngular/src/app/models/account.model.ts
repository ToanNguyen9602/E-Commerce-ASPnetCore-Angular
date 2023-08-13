import { Address } from "./address.model";

export class Account {
    username: string;
    password: string;
    description: string;
    status: boolean;
    gender: string;
    cert: number;
    photo: string;
    id: number;
    address: Address;
}