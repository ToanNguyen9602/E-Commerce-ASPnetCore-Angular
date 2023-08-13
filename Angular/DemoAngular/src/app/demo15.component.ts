import { Component, OnInit } from "@angular/core";
import { ProductAPIService } from "./services/productapi.service";
import { ProductAPI } from "./models/productapi.model";
import { CategoryAPIService } from "./services/categoryapi.service";
import { CategoryAPI } from "./models/categoryapi.model";
import { ConfirmationService, MessageService } from "primeng/api";
import { Router } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './demo15.component.html'
})
export class Demo15Component implements OnInit {

    products: ProductAPI[];
    keyword: string;
    categories: CategoryAPI[];

    constructor(
        private productAPIService: ProductAPIService,
        private categoryAPIService: CategoryAPIService,
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
        private router: Router
    ) { }

    ngOnInit() {

        this.productAPIService.findAll().then(
            res => {
                this.products = res as ProductAPI[];
            },
            err => {
                console.log(err);
            }
        );

        this.categoryAPIService.findAll().then(
            res => {
                this.categories = res as CategoryAPI[];
            },
            err => {
                console.log(err);
            }
        );

    }

    searchByKeyword() {
        this.productAPIService.findByKeyword(this.keyword).then(
            res => {
                this.products = res as ProductAPI[];
            },
            err => {
                console.log(err);
            }
        );
    }

    searchByCategory(evt: any) {
        var categoryId = evt.target.value;
        if (categoryId == -1) {
            this.productAPIService.findAll().then(
                res => {
                    this.products = res as ProductAPI[];
                    console.log(this.products.length);
                    console.log(this.products);
                },
                err => {
                    console.log(err);
                }
            );
        } else {
            this.productAPIService.findByCategoryId(categoryId).then(
                res => {
                    this.products = res as ProductAPI[];
                    console.log(this.products.length);
                    console.log(this.products);
                },
                err => {
                    console.log(err);
                }
            );
        }
    }

    delete(id: number) {
        this.confirmationService.confirm({
            message: 'Are you sure?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.productAPIService.delete(id).then(
                    res => {
                        var result: any = res as any;
                        if (result.status) {
                            this.messageService.add({
                                severity: 'success',
                                detail: 'Done!'
                            });
                            this.productAPIService.findAll().then(
                                res => {
                                    this.products = res as ProductAPI[];
                                },
                                err => {
                                    console.log(err);
                                }
                            );
                        } else {
                            this.messageService.add({
                                severity: 'error',
                                detail: 'Failed'
                            });
                        }
                    },
                    err => {
                        this.messageService.add({
                            severity: 'error',
                            detail: err
                        });
                    }
                );
            },
            reject: (type) => {
            }
        });
    }

}