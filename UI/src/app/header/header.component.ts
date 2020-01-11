import { Component, OnInit } from '@angular/core';

import { CartServices } from '../services/cart.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItem: any;

  constructor(private cartService: CartServices ) { }

  ngOnInit() {
    this.cartItem = this.cartService.cartContainer;
  }

}
