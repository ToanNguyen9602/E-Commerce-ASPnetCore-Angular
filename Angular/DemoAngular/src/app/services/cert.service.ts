import { Injectable } from "@angular/core";
import { Cert } from "../models/cert.model";

@Injectable()
export class CertService {

    findAll(): Cert[] {
        return [
            { id: 1, name: 'Cert 1' },
            { id: 2, name: 'Cert 2' },
            { id: 3, name: 'Cert 3' },
            { id: 4, name: 'Cert 4' },
            { id: 5, name: 'Cert 5' }
        ];
    }

}