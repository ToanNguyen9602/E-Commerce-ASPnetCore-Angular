import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './demo4.component.html'
})
export class Demo4Component implements OnInit {

    f: number;
    area: number;
    perimeter: number;
    username: string;
    password: string;
    msg: string;

    ngOnInit() {
        this.f = 0;
        this.area = 0;
        this.perimeter = 0;
        this.msg = '';
    }

    display(evt: any) {
        console.log(evt.target.value);
    }

    display2(evt: any) {
        console.log(evt.target.value);
        parseFloat('xxx')
        parseInt('xxxx')
    }

    calculate(evt: any) {
        var c = parseFloat(evt.target.value);
        this.f = c * 1.8 + 32;
    }

    calculate2(evt: any) {
        var a = parseFloat(evt.target.value);
        this.area = a * a;
        this.perimeter = a * 4;
    }

    getUsername(evt: any) {
        this.username = evt.target.value;
    }

    getPassword(evt: any) {
        this.password = evt.target.value;
    }

    login() {
        if (this.username == 'abc' && this.password == '123') {
            this.msg = 'Valid';
        } else {
            this.msg = 'InValid';
        }
    }

}
