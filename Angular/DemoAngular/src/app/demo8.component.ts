import { Component, OnInit } from "@angular/core";
import { DemoService } from "./services/demo.service";
import { CalculateService } from "./services/calculate.service";
import { RectangleService } from "./services/rectangle.service";

@Component({
    selector: 'app-root',
    templateUrl: './demo8.component.html'
})
export class Demo8Component implements OnInit {

    msg1: string;
    fullName: string;
    msg2: string;
    snumber1: string;
    snumber2: string;
    result: number;
    area: number;
    perimeter: number;

    constructor(
        private demoService: DemoService,
        private calculateService: CalculateService,
        private rectangleService: RectangleService
    ) { }

    ngOnInit() {
        this.msg1 = this.demoService.hello();
        this.area = this.rectangleService.area(2, 10);
        this.perimeter = this.rectangleService.perimeter(2, 10);
    }

    hi() {
        this.msg2 = this.demoService.hi(this.fullName);
    }

    add() {
        this.result = this.calculateService.add(parseFloat(this.snumber1), parseFloat(this.snumber2));
    }

    mul() {
        this.result = this.calculateService.mul(parseFloat(this.snumber1), parseFloat(this.snumber2));
    }

}