import { Component, OnInit } from "@angular/core";
import { CategoryService } from "./services/category.service";
import { Category } from "./models/category.model";

@Component({
    selector: 'app-root',
    templateUrl: './demo9.component.html'
})
export class Demo9Component implements OnInit {

    category: Category;
    categories: Category[];

    constructor(
        private categoryService: CategoryService
    ) { }

    ngOnInit() {
        this.category = this.categoryService.find();
        this.categories = this.categoryService.findAll();
    }

}