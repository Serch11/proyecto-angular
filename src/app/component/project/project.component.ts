import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../services/projects.service";
import { ModelProjects } from '../../models/projects';
import { Global } from '../../services/global';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  public projects: ModelProjects;
  public url: any;
  constructor(
    private _projecService: ProjectService
  ) {
    this.url = Global.url;
    this.getProyects();
  }

  ngOnInit(): void {
  }

  getProyects() {
    this._projecService.getProyect().subscribe(
      response => {
        console.log(response);
        if (response.project) {
          this.projects = response.project;
          
          //console.log(this.projects);
        }
      },
      error => {
        console.log(<any>error)
      }
    )
  }


}
