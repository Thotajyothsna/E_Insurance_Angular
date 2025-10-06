import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../../employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }
  employeeSource=new BehaviorSubject<Employee[]>([]);
  employee$=this.employeeSource.asObservable();

  setEmployees(empList:Employee[]){
    this.employeeSource.next(empList);
    console.log('serviceEmp:',this.employeeSource);
  }
}
