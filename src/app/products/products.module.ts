import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KategoriComponent } from './kategori/kategori.component';
import { ProductsRouterModule } from './products-routing.module';
import { ElektronikComponent } from './elektronik/elektronik.component';
import { FashionComponent } from './fashion/fashion.component';
import { OtomotifComponent } from './otomotif/otomotif.component';
import { FoodsComponent } from './foods/foods.component';
import { ProductsComponent } from './products.component';



@NgModule({
  declarations: [
    KategoriComponent,
    ElektronikComponent,
    FashionComponent,
    OtomotifComponent,
    FoodsComponent,
    ProductsComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRouterModule
  ]
})
export class ProductsModule { }
