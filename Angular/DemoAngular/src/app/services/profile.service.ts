import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class ProfileService implements CanActivate {

    canActivate() {
        return true;
    }

}