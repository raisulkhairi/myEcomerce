import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KategoriComponent } from './kategori/kategori.component';
import { FashionComponent } from './fashion/fashion.component';
import { OtomotifComponent } from './otomotif/otomotif.component';
import { FoodsComponent } from './foods/foods.component';
import { ProductRouterModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ElektronikComponent } from './elektronik/elektronik.component';

@NgModule({
  declarations: [
    KategoriComponent,
    FashionComponent,
    OtomotifComponent,
    FoodsComponent,
    ProductComponent,
    ElektronikComponent,
  ],
  imports: [
    CommonModule,
    ProductRouterModule,
  ]
})
export class ProductModule { }
