import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataProductService {
url="http://localhost:3000/product/all-data"
  constructor(private http:HttpClient) { }
  products()
  {
    return this.http.get(this.url).subscribe((data)=>{
      console.log("data",data);
    })
  }
}
