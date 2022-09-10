import { Injectable } from '@angular/core';
import { baseUrl } from '../Api'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  // constructor() { }

  constructor(private http: HttpClient) { }

  httpHeaders = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  getbooks(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl + 'books')
  }

  post(data): Observable<any[]> {
    return this.http.post<any[]>(baseUrl + 'books', data, this.httpHeaders)
  }


  // get single book
  get(id): Observable<any[]> {
    return this.http.get<any[]>(baseUrl + 'books/' + id, this.httpHeaders)
  }
  delete(id): Observable<any[]> {
    return this.http.delete<any[]>(baseUrl + 'books/' + id, this.httpHeaders)
  }
  update(id, data): Observable<any[]> {
    return this.http.put<any[]>(baseUrl + 'books/' + id, data, this.httpHeaders)
  }
}
