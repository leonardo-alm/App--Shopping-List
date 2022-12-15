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
    console.log(id)
    const url = `${this.apiUrl}/${id}`
    console.log(this.http.get<Roupa>(url))
    return this.http.get<Roupa>(`${this.apiUrl}/${id}`)
  }

  deleteClothing(id: number){
    return this.http.delete<Roupa>(`${this.apiUrl}/${id}`)
  }

  postClothing(roupa: Roupa): Observable<Roupa>{
    return this.http.post<Roupa>(this.apiUrl, roupa)
  }

  updateClothing(id: number, roupa: Roupa): Observable<Roupa>{
    const url = `${this.apiUrl}/${id}`
    return this.http.put<Roupa>(url, roupa)
  }
}
