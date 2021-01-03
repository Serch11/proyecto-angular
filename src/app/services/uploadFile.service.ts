import { Injectable } from '@angular/core';
import { Global } from './global';


@Injectable()
export class uploadFile {
    public url: string;

    constructor() {
        this.url = Global.url;
    }

    makeUploadFile(url: string, params: Array<string>, files: Array<File>, name: string) {


        return new Promise((resolve, rejects) => {
            var formData: any = new FormData();
            let http = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                console.log(files[i], files[i].name);
                formData.append(name, files[i], files[i].name)
                console.log(formData)
            }
           
            http.addEventListener("readystatechange", (e) => {

                if (http.readyState !== 4) return;
                if (http.status >= 200 && http.status <= 300) {
                    let json = JSON.parse(http.responseText);
                    resolve(json)
                } else {
                    rejects(http.response)
                }
            })
            http.open("POST", url, true);
            http.send(formData)

        })
    }
}