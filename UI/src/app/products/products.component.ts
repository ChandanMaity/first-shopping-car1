import { Component, OnInit } from '@angular/core';
import {Product} from '../items/items';
import {ProductService} from './product.service';
import {observable } from 'rxjs';
import { CartServices } from '../services/cart.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  constructor(private _productServie :  ProductService, private cartServ: CartServices) { }

  ngOnInit() {
    this._productServie.getProduct()
    .subscribe(data => this.products = data);

  }

  addProduct(e, product : Product) {
    e.preventDefault();
    console.log(e);
    this.cartServ.addToCart(product);
  }

}
