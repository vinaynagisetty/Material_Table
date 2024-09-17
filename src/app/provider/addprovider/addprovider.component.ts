import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbAlertModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
    selector: 'app-addprovider',
    templateUrl: './addprovider.component.html',
    styleUrls: ['./addprovider.component.scss'],
    standalone: true,
    imports: [NgSelectModule,NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe]
})
export class AddproviderComponent {
  data=[
    {name:"vinay",id:1},
    {name:"vinay",id:1},
    {name:"vinay",id:1},
    {name:"vinay",id:1},
    {name:"vinay",id:1}
  ]
  model!: NgbDateStruct;
}
