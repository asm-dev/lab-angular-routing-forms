import { Component, OnInit, Input} from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input("projectProp")
  project: Project;
  
  constructor() {
    this.project = new Project("", 0, "")
  }

  ngOnInit(): void {}
}
