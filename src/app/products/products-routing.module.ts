import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElektronikComponent } from './elektronik/elektronik.component';
import { FashionComponent } from './fashion/fashion.component';
import { FoodsComponent } from './foods/foods.component';
import { OtomotifComponent } from './otomotif/otomotif.component';

const routes:Routes=[
 
  {
    path:'elektronik',
    component:ElektronikComponent,
  },
  {
    path:'fashion',
    component:FashionComponent,
  },
  {
    path:'otomotif',
    component:OtomotifComponent,
  },
  {
    path:'foods',
    component:FoodsComponent,
  },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductsRouterModule { }