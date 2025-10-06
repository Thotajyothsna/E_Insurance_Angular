import { Component ,OnInit} from '@angular/core';
import { Employee } from '../../employee';
import { EmpService } from '../../Services/emp/emp.service';

@Component({
  selector: 'app-child-1',
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.css'
})
export class Child1Component implements OnInit {
 Employees:Employee[]=
[
  {empId:1,name:'Ram',age:30,salary:55000,department:'IT'},
  {empId:2,name:'Radha',age:28,salary:45000,department:'HR'},
  {empId:3,name:'Shyam',age:25,salary:40000,department:'IT'},
  {empId:4,name:'Keshavi',age:35,salary:65000,department:'FINANCE'},
  {empId:5,name:'Govind',age:40,salary:55000,department:'HR'},
  {empId:6,name:'Ram',age:23,salary:70000,department:'IT'},
  {empId:7,name:'Ram',age:33,salary:47000,department:'IT'}
];
constructor(private empService:EmpService){}
ngOnInit():void{
  this.empService.setEmployees(this.Employees);
  console.log('child_1:',this.Employees);
}
}
