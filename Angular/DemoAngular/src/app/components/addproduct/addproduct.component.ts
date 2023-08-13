import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { CategoryAPI } from "src/app/models/categoryapi.model";
import { ProductAPI } from "src/app/models/productapi.model";
import { CategoryAPIService } from "src/app/services/categoryapi.service";
import { ProductAPIService } from "src/app/services/productapi.service";

@Component({
    templateUrl: './addproduct.component.html'
})
export class AddProductComponent implements OnInit {

    addProductForm: FormGroup;
    categories: CategoryAPI[];
    file: File;

    constructor(
        private formBuilder: FormBuilder,
        private categoryAPIService: CategoryAPIService,
        private productAPIService: ProductAPIService,
        private router: Router,
        private messageService: MessageService
    ) { }

    ngOnInit() {
        this.addProductForm = this.formBuilder.group({
            name: '',
            price: 0,
            quantity: 0,
            description: '',
            status: true,
            created: '',
            featured: true,
            categoryId: 1
        });

        this.categoryAPIService.findAll().then(
            res => {
                this.categories = res as CategoryAPI[];
            },
            err => {
                console.log(err);
            }
        );

    }

    save() {
        var product: ProductAPI = this.addProductForm.value as ProductAPI;
        var formData = new FormData();
        formData.append('file', this.file);
        formData.append('strProduct', JSON.stringify(product));
        this.productAPIService.create(formData).then(
            res => {
                var result: any = res as any;
                if (result.status) {
                    this.router.navigate(['/index']);
                } else {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Failed',
                        detail: 'Them San Pham That Bai'
                    });
                }
            },
            err => {
                console.log(err);
            }
        );
    }

    selectFile(evt: any) {
        this.file = evt.target.files[0];
    }

}