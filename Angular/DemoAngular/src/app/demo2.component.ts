import { Component, OnInit } from "@angular/core";
import { Product } from "./models/product.model";

@Component({
    selector: 'app-root',
    templateUrl: './demo2.component.html'
})
export class Demo2Component implements OnInit {

    product: Product;
    products: Product[];

    ngOnInit() {
        this.product = {
            id: 12,
            name: 'Name 1',
            price: 4.5,
            photo: 'thumb3.gif',
            category: {
                id: 45,
                name: 'category 1'
            }
        };
        this.products = [
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

}