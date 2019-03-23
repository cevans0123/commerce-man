import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: 'products/new',
    component: ProductNewComponent
  },
  {
    path: 'products/:id',
    component: ProductShowComponent
  },
  {
    path: 'products/:id/edit',
    component: ProductEditComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: '',
    pathMatch:'full', redirectTo: '/products'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
