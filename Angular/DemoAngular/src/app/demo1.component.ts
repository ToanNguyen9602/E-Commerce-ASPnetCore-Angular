import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './demo1.component.html',
    styleUrls: [
        './demo1.component.css'
    ]
})
export class Demo1Component implements OnInit {

    id: number;
    username: string;
    status: boolean;
    phone: any;
    price: number;
    quantity: number;
    photo: string;
    width: number;
    height: number;
    names: string[];

    ngOnInit() {
        this.id = 123;
        this.username = 'abc';
        this.status = false;
        this.phone = '123';
        this.price = 4.5;
        this.quantity = 2;
        this.photo = 'thumb2.gif';
        this.width = 70;
        this.height = 80;
        this.names = [
            'Name 1', 'Name 2', 'Name 3', 'Name 4'
        ];
    }

}