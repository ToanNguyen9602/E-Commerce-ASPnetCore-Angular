import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './demo5.component.html'
})
export class Demo5Component implements OnInit {

    categories: any;
    selectedFile: File;
    selectedFiles: File[];

    ngOnInit() {
        this.categories = [
            { id: 1, name: 'Category 1' },
            { id: 2, name: 'Category 2' },
            { id: 3, name: 'Category 3' },
            { id: 4, name: 'Category 4' }
        ];
    }

    selectCategory(evt: any) {
        var id = evt.target.value;
        console.log(id);
    }

    selectFile(evt: any) {
        var fileInfo = evt.target.files[0];
        console.log(fileInfo);
        console.log('name: ' + fileInfo.name);
        console.log('size(byte): ' + fileInfo.size);
        console.log('type: ' + fileInfo.type);
    }

    selectFiles(evt: any) {
        var fileInfos = evt.target.files;
        console.log('files: ' + fileInfos.length);
        for (var i = 0; i < fileInfos.length; i++) {
            console.log('name: ' + fileInfos[i].name);
            console.log('size(byte): ' + fileInfos[i].size);
            console.log('type: ' + fileInfos[i].type);
            console.log('---------------------');
        }
    }

    selectFileUpload(evt: any) {
        this.selectedFile = evt.target.files[0];
    }

    selectFileUploads(evt: any) {
        this.selectedFiles = evt.target.files;
    }

    upload() {
        console.log(this.selectedFile);
        console.log('name: ' + this.selectedFile.name);
        console.log('size(byte): ' + this.selectedFile.size);
        console.log('type: ' + this.selectedFile.type);
        
    }

}
