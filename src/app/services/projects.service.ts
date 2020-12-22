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

    setPrueba() {
        return "probando servicio";
    }
}
