import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { dataProduct } from '../services/product-interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Products : dataProduct[] =[]
  constructor(private  productService : ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res:any)=>{
      this.Products =res.data
      console.log(this.Products);
    })
  }

}
