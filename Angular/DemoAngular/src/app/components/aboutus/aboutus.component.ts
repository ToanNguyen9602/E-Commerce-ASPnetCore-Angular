import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './aboutus.component.html'
})
export class AboutusComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            var id = params.get('id');
            console.log(id);
        });
    }

}