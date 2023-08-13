import { Injectable } from "@angular/core";
import { Role } from "../models/role.model";

@Injectable()
export class RoleService {

    findAll(): Role[] {
        return [
            { id: 1, name: 'Role 1' },
            { id: 2, name: 'Role 2' },
            { id: 3, name: 'Role 3' },
            { id: 4, name: 'Role 4' },
            { id: 5, name: 'Role 5' }
        ];
    }

}