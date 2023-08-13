import { Injectable } from "@angular/core";
import { CalculateService } from "./calculate.service";

@Injectable()
export class RectangleService {

    constructor(
        private calculateService: CalculateService
    ) { }

    area(a: number, b: number): number {
        return this.calculateService.mul(a, b);
    }

    perimeter(a: number, b: number): number {
        return this.calculateService.mul(this.calculateService.add(a, b), 2);
    }

}