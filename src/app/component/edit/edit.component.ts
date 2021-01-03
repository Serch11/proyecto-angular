import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../../services/projects.service';
import { Global } from '../../services/global';
import { ModelProjects } from '../../models/projects';
import { uploadFile } from '../../services/uploadFile.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, uploadFile]
})
export class EditComponent implements OnInit {

  public url = Global.url;
  public project: ModelProjects;
  public idProject: any;
  public fileUpdate: Array<File>;
  public click: boolean;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _uploadFileService: uploadFile
  ) {

    this.click = false;
    this._route.params.subscribe(params => {
      this.idProject = params.id;

      if (this.idProject) {
        this._projectService.getOneProtect(this.idProject).subscribe(
          response => {
            this.project = response.project;
            console.log(this.project)
          },
          error => {
            console.log(<any>error);
          }
        )
      }
    });
  }
  ngOnInit(): void {
  }
  updateProyect(id, form) {
    // console.log(this.project)
    // console.log(id);
    this._projectService.updateProject(id, this.project).subscribe(
      response => {
        if (this.click) {
          console.log(response);
          if (response) {
            this._uploadFileService.makeUploadFile(this.url + "uploadImage/" + id, [], this.fileUpdate, 'imagen')
              .then((response) => {
                if (response) {
                  location.reload();
                }
              }).catch((err) => {
                console.log(err)
              })
          }
        }else{
          console.log(this.click)
          location.reload();
        }

      },
      error => {
        console.log(<any>error)
      })
  }
  onChangeFile(e) {
    this.click = true;
    console.log(this.click)
    console.log(e);
    this.fileUpdate = <Array<File>>e.target.files;
    console.log(this.fileUpdate);
  }
}
