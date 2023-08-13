import { Category } from "./category.model";

export class Product {
    id: number;
    name: string;
    photo: string;
    price: number;
    category: Category;
}