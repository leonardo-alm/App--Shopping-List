import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Roupa } from '../Roupa';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/clothes'

  constructor(private http: HttpClient) { }

  getClothes(): Observable<Roupa[]>{
    return this.http.get<Roupa[]>(this.apiUrl)
  }

  getClothing(id: number): Observable<Roupa> {
    return this.http.get<Roupa>(`${this.apiUrl}/${id}`)
  }

  deleteClothing(id: number){
    return this.http.delete<Roupa>(`${this.apiUrl}/${id}`)
  }

  includeClothing(formData: FormData): Observable<FormData>{
    console.log(formData)
    return this.http.post<FormData>(this.apiUrl, formData)
  }

  updateMoment(id: number, formData: FormData): Observable<FormData>{
    console.log(formData)
    const url = `${this.apiUrl}/${id}`
    return this.http.put<FormData>(url, formData)
  }


}
