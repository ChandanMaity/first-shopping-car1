import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import {HomepageComponent} from './homepage/homepage.component'
import { from } from 'rxjs';


const routes: Routes = [
  {path : 'cart', component : CartComponent},
  {path: 'home', component :HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
export const routingComponent = [CartComponent,HomepageComponent];
