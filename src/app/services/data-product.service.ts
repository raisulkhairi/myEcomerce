import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataProductService {
url="http://localhost:5000/product/all-data"
  constructor(private http:HttpClient) { }
  products()
  {
    return this.http.get(this.url);
  }
}
  