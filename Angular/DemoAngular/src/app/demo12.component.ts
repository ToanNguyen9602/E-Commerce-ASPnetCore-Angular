import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { Product } from "./models/product.model";

@Component({
    selector: 'app-root',
    templateUrl: './demo12.component.html'
})
export class Demo12Component implements OnInit {

    dob1: Date;
    content: string;
    products: Product[];
    uploadedFiles: any[] = [];

    constructor(
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) { }

    ngOnInit() {
        this.content = '';
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

    clickMe() {
        /* success, info, warn and error */
        this.messageService.add({ 
            severity: 'error', 
            summary: 'Da Hoan Thanh', 
            detail: 'Them San Pham Thanh Cong'
        });
    }

    delete() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.messageService.add({ 
                    severity: 'success', 
                    summary: 'Accept', 
                    detail: 'Accept'
                });
            },
            reject: (type) => {     
                this.messageService.add({ 
                    severity: 'warn', 
                    summary: 'Reject', 
                    detail: 'Reject'
                });           
            }
        });
    }

}