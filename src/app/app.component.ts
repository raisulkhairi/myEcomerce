import { Component,OnInit } from '@angular/core';
import { DataProductService } from './services/data-product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myImage : string = "assets/img/baju-fashion.jpg"
  title = 'myEcomerce';
  constructor(private productData : DataProductService)
  {
    this.productData.products()
  }

}
