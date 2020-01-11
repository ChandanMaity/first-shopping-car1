import { Injectable } from "@angular/core";
import { Product } from '../items/items'

@Injectable()

export class CartServices {

    cartContainer: Array<Product>= [];
 public   isDuplicateItem : boolean ;
 //public totalPrice : number = 0;

    constructor() {}
    addToCart(product : Product ) {
        this.isDuplicateItem = false;
        if(this.cartContainer.length == 0){
         this.cartContainer.push(product);
        }
        else{

            this.preventDuplicateItemAdding(product);
              if(this.isDuplicateItem == false){
                  console.log('else' ,product.id)
                     this.cartContainer.push(product);
             }

        }
       
    }
    preventDuplicateItemAdding (product : Product){
        console.log(product.id)
        for(var i=0; i < this.cartContainer.length; i++){
            console.log(this.cartContainer[i].id)
            if(product.id == this.cartContainer[i].id){
                console.log(product.id)
                this.isDuplicateItem = true;
                break;
            }
        }
    }
    removeItem(index : number, cartItems){
        this.cartContainer = cartItems;
        this.cartContainer.splice(index,1)

    }


    sumOfPrice(carditems){
       var totalPrice  = 0;
        for(var i=0; i< carditems.length;i++){
            totalPrice = totalPrice + carditems[i].price;
            }
    }


    



}
