import { Component, OnInit } from '@angular/core';

import { CartServices } from '../services/cart.services';
import { Product } from '../items/items';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carditems: Array<Product>= [];
  isDuplicateItem : boolean;
  indexNumberOfRemovedItem : number;
  public totalPrice  = 0;

  constructor(private cartServices: CartServices) { }

  ngOnInit() {
    this.carditems = this.cartServices.cartContainer;
    this.isDuplicateItem = this.cartServices.isDuplicateItem;
    this.totalPriceOfItems(this.carditems);
    

  }
  deleteItem(e, product : Product){
    this.indexNumberOfRemovedItem = this.carditems.indexOf(product);
    this.cartServices.removeItem(this.indexNumberOfRemovedItem,this.carditems);
    this.totalPriceOfItems(this.carditems);


  }

  totalPriceOfItems(carditems){
     this.totalPrice  = 0;
    for (var i=0; i< this.carditems.length; i++ ){
          this.totalPrice = this.totalPrice+this.carditems[i].price;
    }

  }
  

}
