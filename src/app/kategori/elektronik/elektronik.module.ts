import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ElektronikRoutingModule } from './elektronik-routing.module';

@NgModule({
    declarations: [
        DetailProductComponent,
    ],
    imports: [
      CommonModule,
      ElektronikRoutingModule,
    ]
  })
  export class ElektronikModule { }