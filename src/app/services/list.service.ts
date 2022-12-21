import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Clothing } from '../Clothing';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/clothes'

  constructor(private http: HttpClient) { }

  getClothes(): Observable<Clothing[]>{
    return this.http.get<Clothing[]>(this.apiUrl)
  }

  getClothing(id: number): Observable<Clothing> {
    console.log(id)
    const url = `${this.apiUrl}/${id}`
    console.log(this.http.get<Clothing>(url))
    return this.http.get<Clothing>(`${this.apiUrl}/${id}`)
  }

  deleteClothing(id: number){
    return this.http.delete<Clothing>(`${this.apiUrl}/${id}`)
  }

  postClothing(Clothing: Clothing): Observable<Clothing>{
    return this.http.post<Clothing>(this.apiUrl, Clothing)
  }

  updateClothing(id: number, Clothing: Clothing): Observable<Clothing>{
    const url = `${this.apiUrl}/${id}`
    return this.http.put<Clothing>(url, Clothing)
  }
}
