import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {
  path: 'user',
  loadChildren:'./user/user.module#UserModule'
  },
  {
    path: 'item',
    loadChildren:'./items/items.module#ItemsModule'
  },
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'cart',
    loadChildren:'./cart/cart.module#CartModule'
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      // enableTracing: true, //
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule],
  declarations: []
})
  
export class AppRoutingModule { }
