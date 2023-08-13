import { Injectable } from "@angular/core";
import { Category } from "../models/category.model";

@Injectable()
export class CategoryService {

    find(): Category {
        return {
            id: 1,
            name: 'Category 1'
        };
    }

    findAll(): Category[] {
        return [
            {
                id: 1,
                name: 'Category 1'
            },
            {
                id: 2,
                name: 'Category 2'
            },
            {
                id: 3,
                name: 'Category 3'
            }
        ];
    }

}