import { Injectable } from "@angular/core";

@Injectable()
export class DemoService {

    hello(): string {
        return 'Hello World';
    }

    hi(name: string): string {
        return 'Hi ' + name;
    }

}