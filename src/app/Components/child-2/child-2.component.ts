import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { EmpService } from '../../Services/emp/emp.service';

@Component({
  selector: 'app-child-2',
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.css'
})
export class Child2Component {
employees:Employee[]=[];

constructor(private empService:EmpService){
  this.empService.employee$.subscribe(data=>
  {
    this.employees=data;
  }
  )
  console.log('Child_2:',this.employees);
}
}
