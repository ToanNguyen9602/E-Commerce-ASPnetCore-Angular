import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

    username: string;

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.username = params.get('username');
        });
    }

}