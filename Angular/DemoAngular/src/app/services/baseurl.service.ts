import { Injectable } from "@angular/core";

@Injectable()
export class BaseUrlService {

    private BaseUrl: string = 'http://localhost:5188/api/';

    getBaseUrl(): string {
        return this.BaseUrl;
    }

}