import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users/';
   }

   getListEmployee(): Observable<employee []> {
    return this.http.get<employee[]>(`${this.myAppUrl}${this.myApiUrl}`);
   }
   deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
  updateEmployee(id: number, employee: employee): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, employee);
  }
  saveEmployee(employee: employee): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, employee)
  }
  getEmployee(id: number): Observable<employee> {
    return this.http.get<employee>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

}
