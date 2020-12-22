import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projects.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService],
})
export class CreateComponent implements OnInit {
  
  constructor(private _projecService: ProjectService) {
    
   
  }


  ngOnInit(): void {
   
  }

}
