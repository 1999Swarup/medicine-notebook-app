import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseURL="http://localhost:8080/api/v2/medicines";

  constructor(private httpClient: HttpClient) { }
  
  getMedicineList(): Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseURL}`);
  }

  createMedicine(medicine: Medicine): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, medicine);
  }
  
   getMedicineById(id: number): Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseURL}/${id}`);
  }

  updateMedicine(id: number, medicine: Medicine): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, medicine);
  }

  deleteMedicine(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
