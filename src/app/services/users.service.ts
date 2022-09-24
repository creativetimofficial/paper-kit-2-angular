// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService {

//   constructor() { }
// }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../Api';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // getusers(): Observable<any[]> {
  //   return this.http.get<any[]>(baseUrl + 'users')
  // }
  postuser(data): Observable<any[]> {
    return this.http.post<any[]>(baseUrl, data, this.httpHeaders)
  }
  // confirmuser(data): Observable<any[]> {
  //   return this.http.post<any[]>(baseUrl + 'users/login', data, this.httpHeaders)
  // }
  // login(user) {
  //   return this.http.post<any[]>(baseUrl + 'users/login', user)
  // }
  // checktoken() {
  //   return this.http.post<any[]>(baseUrl + 'users/checktoken', {})

  // }
  // getauth() {
  //   let data = JSON.parse(localStorage.getItem('users'))
  //   return data

  // }
  // deleteuser(id): Observable<any[]> {
  //   return this.http.delete<any[]>(baseUrl + 'users/' + id, this.httpHeaders)
  // }
  // updateuser(id, data): Observable<any[]> {
  //   return this.http.put<any[]>(baseUrl + 'users/' + id, data, this.httpHeaders)
  // }
}