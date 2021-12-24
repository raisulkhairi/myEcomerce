import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  getAllProducts():Observable<Data[]>{
    return this.http.get<Data[]>(
      "http://localhost:5000/product/all-product"
    )
  }
}
