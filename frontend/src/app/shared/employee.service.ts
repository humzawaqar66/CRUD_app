import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Designation, Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private myhttp:HttpClient) { }
  employeeUrl:string='https://localhost:7138/api/Employee';
  designationUrl:string='https://localhost:7138/api/Designation';
  listEmployee:Employee[]=[]; //For Getting Data EmployeeList
  listDesignation:Designation[]=[];
  employeeData:Employee=new Employee(); //for post data / Insert data
  saveEmployee()
  {
    return this.myhttp.post(this.employeeUrl,this.employeeData);
  }
  updateEmployee()
  {
    return this.myhttp.put(`${this.employeeUrl}/${this.employeeData.Id}` ,this.employeeData);
  }
  getEmployees():Observable<Employee[]>
  {
    return this.myhttp.get<Employee[]>(this.employeeUrl);
  }
  getDesignations():Observable<Designation[]>
  {
    return this.myhttp.get<Designation[]>(this.designationUrl);
  }
  deleteEmployee(id:number)
  {
    return this.myhttp.delete(`${this.employeeUrl}/${id}`);
  }
}
