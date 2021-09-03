import { Component } from '@angular/core';
import  *  as  data  from  '../mentor.json';

export interface PeriodicElement {
  name: string;
  userType: string;
  entity: string;
  status: string;
}
const ELEMENT_DATA = Object.assign([], data)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table-material';
  displayedColumns: string[] = ['name', 'userType', 'entity', 'status'];
  dataSource = ELEMENT_DATA;
}

