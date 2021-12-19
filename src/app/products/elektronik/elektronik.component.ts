import { Component, OnInit } from '@angular/core';
import { DataProductService } from 'src/app/services/data-product.service';
import { dataProduct } from 'src/app/services/product-interface';
@Component({
  selector: 'app-elektronik',
  templateUrl: './elektronik.component.html',
  styleUrls: ['./elektronik.component.scss']
})
export class ElektronikComponent implements OnInit {

  products : dataProduct[] = [];
  constructor(private dataProductService : DataProductService ) { }
  
  product(){
    this.dataProductService.products().subscribe((res : any)=>{
      this.products = res.data; 
    })
  }
  ngOnInit(): void {
    this.product()    
  }

}
