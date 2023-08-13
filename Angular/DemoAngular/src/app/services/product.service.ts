import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService {

    findAll(): Product[] {
        return [
            {
                id: 1,
                name: 'Name 1',
                price: 4.5,
                photo: 'thumb3.gif',
                category: {
                    id: 45,
                    name: 'category 1'
                }
            },
            {
                id: 2,
                name: 'Name 2',
                price: 7.8,
                photo: 'thumb2.gif',
                category: {
                    id: 1,
                    name: 'category 2'
                }
            },
            {
                id: 3,
                name: 'Name 3',
                price: 6.7,
                photo: 'thumb1.gif',
                category: {
                    id: 3,
                    name: 'category 3'
                }
            }
        ];
    }

    find(id: number): Product {
        var products: Product[] = this.findAll();
        for (var i = 0; i < products.length; i++) {
            if (products[i].id == id) {
                return products[i];
            }
        }
        return null;
    }

}