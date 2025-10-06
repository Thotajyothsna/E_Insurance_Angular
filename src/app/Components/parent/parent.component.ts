import { Component } from '@angular/core';
import { Employee } from '../../employee'; 
import { EmpService } from '../../Services/emp/emp.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
filterText:string='';
allEmployees:Employee[]=[];
constructor(private empService:EmpService){
  this.empService.employee$.subscribe(data=>{
    this.allEmployees=data;
  });

}
filterbyAge(){
  const Age=Number(this.filterText);
  if(!isNaN(Age)){
const filtered=this.allEmployees.filter(x=>x.age>=Age);
this.empService.setEmployees(filtered);
console.log('filterByAge:',filtered);
  }
}
filterbyDept(){
  const department=this.filterText.trim().toLowerCase();
if(department){
  const filtered=this.allEmployees.filter(x=>x.department.toLowerCase()===department);
  this.empService.setEmployees(filtered);
  console.log('filterbyDept:',filtered);
}

}
}
