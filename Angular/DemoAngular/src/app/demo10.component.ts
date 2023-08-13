import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Account } from "./models/account.model";
import { Cert } from "./models/cert.model";
import { CertService } from "./services/cert.service";
import { RoleService } from "./services/role.service";
import { Role } from "./models/role.model";

@Component({
    selector: 'app-root',
    templateUrl: './demo10.component.html'
})
export class Demo10Component implements OnInit {

    registerForm: FormGroup;
    certs: Cert[];
    roles: Role[];
    file: File;

    constructor(
        private formBuilder: FormBuilder,
        private certService: CertService,
        protected roleService: RoleService
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: 'acc2',
            password: '',
            description: 'ABC',
            status: true,
            gender: 'female',
            cert: '2',
            role: 2,
            id: 123,
            address: this.formBuilder.group({
                street: '',
                ward: '',
                district: ''
            })
        });
        this.certs = this.certService.findAll();
        this.roles = this.roleService.findAll();
    }

    save() {
        var account: Account = this.registerForm.value as Account;
        console.log('username: ' + account.username);
        console.log('password: ' + account.password);
        console.log('status: ' + account.status);
        console.log('gender: ' + account.gender);
        console.log('cert: ' + account.cert);
        // Upload file
        account.photo = this.file.name;
        console.log('photo: ' + account.photo);
        console.log('id: ' + account.id);
        console.log('Address Info');
        console.log('street: ' + account.address.street);
        console.log('ward: ' + account.address.ward);
        console.log('district: ' + account.address.district);
    }

    selectFile(evt: any) {
        this.file = evt.target.files[0];
    }

}