import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projects.service';
import { uploadFile } from '../../services/uploadFile.service';
import { ModelProjects } from '../../models/projects';
import { Observable } from 'rxjs/Observable';
import { Global } from '../../services/global';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, uploadFile],
})
export class CreateComponent implements OnInit {
  public project: ModelProjects;
  public status: string;
  public filesToUpload: Array<File>;
  public url = Global.url;

  constructor(private _projecService: ProjectService, private _uploadFileService: uploadFile) {
    this.project = new ModelProjects("", "", "", "", "", "");
  }

  ngOnInit(): void {

  }

  onSubmit(form) {
    // consolee.log(event.target);
    //console.log(this.project)
    //guardar datos
    this._projecService.saveProject(this.project).subscribe(
      response => {
        //console.log(response);
        console.log(response.project._id);
        if (response.project) {
          this._uploadFileService.makeUploadFile(this.url+"uploadImage/"+response.project._id, [],this.filesToUpload, 'imagen')
            .then((result: any) => {
              console.log(result)
              this.status = "succes";
              form.reset();
            })
        }
      },
      error => {
        console.log(error);
        if (error) {
          this.status = "error";
        }
      }
    );
  }
  onChangeFile(e) {
    //console.log(e.target.files);
    this.filesToUpload = <Array<File>>e.target.files;
    console.log(this.filesToUpload);
  }
}
