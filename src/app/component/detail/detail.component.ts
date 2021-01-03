import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projects.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModelProjects } from '../../models/projects';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public projects: ModelProjects;
  public url = Global.url;
  public confirmar: boolean;

  constructor(
    private _projecService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.confirmar = false;
    console.log(this.confirmar)
  }
  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      let id = params.id;
      this.getProject(id);
    })
  }

  getProject(id) {
    this._projecService.getOneProtect(id).subscribe(
      response => {
        this.projects = response.project;
      },
      error => {
        console.log(error);

      }
    )
  }

  confirDelete(data) {
    this.confirmar = data;
    console.log(true);
  }

  deleteProject(id_project) {

    this._projecService.deleteProject(id_project).subscribe(response => {
      console.log(response);
      this._router.navigate(['/proyectos']);
    },
      error => {
        console.log(<any>error)
      })
  };

  updateProject(id, project) {
    console.log(id);
    console.log(project);
  }
}
