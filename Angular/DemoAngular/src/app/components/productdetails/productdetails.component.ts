import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";

@Component({
    templateUrl: './productdetails.component.html'
})
export class ProductDetailsComponent implements OnInit {

    product: Product;

    constructor(
        private productService: ProductService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            var id = parseInt(params.get('id'));
            this.product = this.productService.find(id);
        });
    }

}