import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Account } from "./models/account.model";

@Component({
    selector: 'app-root',
    templateUrl: './demo11.component.html',
    styleUrls: [
        './demo11.component.css'
    ]
})
export class Demo11Component implements OnInit {

    registerForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(10)
            ]],
            password: ['', [
                Validators.required,
                Validators.pattern('^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})$')
            ]],
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            website: ['', [
                Validators.pattern(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/)
            ]],
            age: [0, [
                Validators.min(18),
                Validators.max(120)
            ]]
        });
    }

    save() {
        var account: Account = this.registerForm.value as Account;
        console.log('username: ' + account.username);
        console.log('password: ' + account.password);
    }

}