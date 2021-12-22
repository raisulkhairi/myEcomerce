import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './elektronik.interface';

@Injectable({
  providedIn: 'root'
})
export class ElektronikService {

  constructor(private http : HttpClient) { }

  getProductEl():Observable<Data[]>{
    return this.http.get<Data[]>(
      "http://localhost:5000/product/all-product"
    )
  }
}
