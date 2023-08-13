import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './demo3.component.html'
})
export class Demo3Component implements OnInit {

    photo: string;
    width: string;
    height: string;

    ngOnInit() {
        this.photo = 'assets/images/thumb1.gif';
        this.width = '300';
        this.height = '300';
    }

    clickMe(evt: any) {
        //alert('hello world');
        console.log(evt.target.value);
    }

    changeBg(evt: any) {
        console.log(evt.target.value);
    }

    changePhoto(evt: any) {
        this.photo = evt.target.src;
    }

    resize(evt: any) {
        var value = evt.target.value;
        var size = value.split('x');
        this.width = size[0];
        this.height = size[1];
    }

}