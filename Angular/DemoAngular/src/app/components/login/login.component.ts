import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;
    msg: string;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.msg = '';
    }

    login() {
        if (this.username == 'abc' && this.password == '123') {
            this.router.navigate(['/welcome', { username: this.username }]);
        } else {
            this.msg = 'Invalid';
        }
    }

}