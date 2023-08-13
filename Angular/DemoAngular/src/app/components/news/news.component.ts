import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            var id = params.get('id');
            console.log(id);
            var username = params.get('username');
            console.log(username);
        });
    }

}