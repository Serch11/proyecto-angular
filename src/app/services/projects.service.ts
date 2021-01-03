import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelProjects } from '../models/projects';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';



@Injectable()
export class ProjectService {

    public url: string;
    constructor(private _http: HttpClient) {

        this.url = Global.url;
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }

    ajax(params) {
        let { method, url, succes, error, data } = params;

        let http = new XMLHttpRequest();
        http.addEventListener("readystatechange", (e) => {
            //console.log(e);
            //console.log(http);
            if (http.readyState !== 4) return;
            if (http.status >= 200 && http.status <= 300) {
                let json = JSON.parse(http.responseText);
                //console.log(json);
                succes(json);
            } else {
                let message = http.status || "Data no found";
                error(`Error ${http.status} ${message}`);
            }
        });
        http.open(method || "GET", url);
        http.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        http.send(JSON.stringify(data));
    }

    setPrueba() {
        return "probando servicio";
    }
    saveProject(project: ModelProjects): Observable<any> {
        let params = JSON.stringify(project);
        let header = new HttpHeaders().set("Content-Type", "application/json");
        let urlSave = this.url + "save-project";
        console.log(urlSave);
        return this._http.post(urlSave, params, { headers: header });
    }

    saveProject2(project: ModelProjects) {
        let params = project;
        this.ajax({
            method: "POST",
            url: this.url + "save-project",
            succes: (json) => {
                console.log(json);
            },
            error: (error) => {
                console.log(error);
            },
            data: params
        });
    }

    getProyect(): Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "applicaction/json");
        return this._http.get(this.url + "getAllProject", { headers: headers });
    }

    getOneProtect(id: any): Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.get(this.url + "findOneProject/" + id, { headers: headers });
    }

    deleteProject(id: any): Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.delete(this.url + "deleteProject/" + id, { headers: headers });
    }

    updateProject(id: any, params:ModelProjects): Observable<any> {
        let project = JSON.stringify(params)
        console.log(project)
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.put(this.url + "updateProject/"+id, project, {headers:headers});
    }
}
