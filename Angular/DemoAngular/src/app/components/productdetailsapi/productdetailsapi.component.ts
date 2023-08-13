import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductAPI } from "src/app/models/productapi.model";
import { ProductAPIService } from "src/app/services/productapi.service";

@Component({
    templateUrl: './productdetailsapi.component.html'
})
export class ProductDetailsAPIComponent implements OnInit {

    product: ProductAPI;

    constructor(
        private productAPIService: ProductAPIService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(p => {
            var id = p.get('id');
            this.productAPIService.findById(id).then(
                res => {
                    this.product = res as ProductAPI;
                },
                err => {
                    console.log(err);
                }
            );
        });
    }

}