import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { CategoryAPI } from "src/app/models/categoryapi.model";
import { ProductAPI } from "src/app/models/productapi.model";
import { CategoryAPIService } from "src/app/services/categoryapi.service";
import { ProductAPIService } from "src/app/services/productapi.service";

@Component({
    templateUrl: './editproduct.component.html'
})
export class EditProductComponent implements OnInit {

    editProductForm: FormGroup;
    categories: CategoryAPI[];
    file: File;
    product: ProductAPI;

    constructor(
        private formBuilder: FormBuilder,
        private categoryAPIService: CategoryAPIService,
        private productAPIService: ProductAPIService,
        private router: Router,
        private messageService: MessageService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {

        this.activatedRoute.paramMap.subscribe(p => {
            var id = p.get('id');
            this.productAPIService.findById(id).then(
                res => {
                    this.product = res as ProductAPI;
                    this.editProductForm = this.formBuilder.group({
                        name: this.product.name,
                        price: this.product.price,
                        quantity: this.product.quantity,
                        description: this.product.description,
                        status: this.product.status,
                        created: this.product.created,
                        featured: this.product.featured,
                        categoryId: this.product.categoryId
                    });
                },
                err => {
                    console.log(err);
                }
            );
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
        var product: ProductAPI = this.editProductForm.value as ProductAPI;
        product.id = this.product.id;
        var formData = new FormData();
        formData.append('file', this.file);
        formData.append('strProduct', JSON.stringify(product));
        this.productAPIService.update(formData).then(
            res => {
                var result: any = res as any;
                if (result.status) {
                    this.router.navigate(['/index']);
                } else {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Failed',
                        detail: 'Cap nhat San Pham That Bai'
                    });
                }
            },
            err => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Failed',
                    detail: 'Cap nhat San Pham That Bai'
                });
            }
        );
    }

    selectFile(evt: any) {
        this.file = evt.target.files[0];
    }

}