import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './demo7.component.html'
})
export class Demo7Component implements OnInit {

    msg1: string;
    msg2: string;
    username: string;
    password: string;
    msg3: string;
    stoan: string;
    sly: string;
    shoa: string;
    dtb: number;
    loai: string;

    ngOnInit() {
        this.msg1 = 'Hello';
        this.msg2 = 'ABC';
        this.username = '';
        this.password = '';
        this.msg3 = '';
    }

    save() {
        console.log(this.msg2);
    }

    login() {
        if (this.username == 'abc' && this.password == '123') {
            this.msg3 = 'Valid';
        } else {
            this.msg3 = 'InValid';
        }
    }

    tinh() {
        var toan = parseFloat(this.stoan);
        var ly = parseFloat(this.sly);
        var hoa = parseFloat(this.shoa);
        this.dtb = (toan * 3 + ly * 2 + hoa) / 6;
        
    }

}