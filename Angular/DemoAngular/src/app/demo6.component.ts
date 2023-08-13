import { Component, OnInit } from "@angular/core";
import { Product } from "./models/product.model";
import { Category } from "./models/category.model";

@Component({
    selector: 'app-root',
    templateUrl: './demo6.component.html'
})
export class Demo6Component implements OnInit {

    products: Product[];
    result: Product[];
    categories: Category[];
    product: Product;

    ngOnInit() {
        this.products = [
            {
                id: 1,
                name: 'tivi 1',
                price: 4.5,
                photo: 'thumb3.gif',
                category: {
                    id: 1,
                    name: 'Category 1'
                }
            },
            {
                id: 2,
                name: 'tivi 2',
                price: 7.8,
                photo: 'thumb2.gif',
                category: {
                    id: 1,
                    name: 'Category 1'
                }
            },
            {
                id: 3,
                name: 'laptop 1',
                price: 6.7,
                photo: 'thumb1.gif',
                category: {
                    id: 2,
                    name: 'Category 2'
                }
            }
        ];
        this.result = this.products;
        this.categories = [
            { id: 1, name: 'Category 1' },
            { id: 2, name: 'Category 2' }
        ];
        this.product = this.products[0];
    }

    searchByKeyword(evt: any) {
        var keyword = evt.target.value.toUpperCase();
        this.result = [];
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].name.toUpperCase().includes(keyword)) {
                this.result.push(this.products[i]);
            }
        }
    }

    searchByCategory(evt: any) {
        var categoryId = parseInt(evt.target.value);
        if (categoryId == -1) {
            this.result = this.products;
        } else {
            this.result = [];
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].category.id == categoryId) {
                    this.result.push(this.products[i]);
                }
            }
        }
    }

    details(id: number) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                this.product = this.products[i];
                break;
            }
        }
    }

}