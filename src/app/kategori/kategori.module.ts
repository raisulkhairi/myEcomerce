import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElektronikComponent } from './elektronik/elektronik.component';
import { FashionComponent } from './fashion/fashion.component';
import { OtomotifComponent } from './otomotif/otomotif.component';
import { FoodsComponent } from './foods/foods.component';
import { KategoriRoutingModule } from './kategori-routing.module';
import { DetailProductComponent } from './elektronik/detail-product/detail-product.component';

@NgModule({
  declarations: [
    ElektronikComponent,
    FashionComponent,
    OtomotifComponent,
    FoodsComponent,
    DetailProductComponent,
  ],
  imports: [
    CommonModule,
    KategoriRoutingModule,
  ]
})
export class KategoriModule { }
