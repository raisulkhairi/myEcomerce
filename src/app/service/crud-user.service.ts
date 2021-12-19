import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudUserService {
  url = "http://localhost:5000/user/register"
  constructor(private http: HttpClient) { }
  user() {
    return this.http.post,(body:any)=>(this.url);
  }
}
