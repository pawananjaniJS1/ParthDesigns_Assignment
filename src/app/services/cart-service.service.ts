import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})


export class CartServiceService {

private cartItems:Product[]=[];

subject = new BehaviorSubject<Product[]>([]);


local_storage:Product[]= []

addToCart(item:Product){
let done = false;

  if(localStorage.getItem('cartItems')==null){
     this.local_storage = [];
     console.log('local storage is empty');
     this.cartItems.push(item);
     localStorage.setItem('cartItems',JSON.stringify(this.cartItems));
     this.subject.next(this.cartItems);
     this.local_storage.push(item);
     console.log('first item added to cart',this.cartItems);
  }
  else
  {
    this.local_storage = JSON.parse(localStorage.getItem('cartItems')||'[]');
    console.log('local storage is not empty',JSON.parse(localStorage.getItem('cartItems') || '[]'));
    
    for(var i in this.local_storage)
    {
      // console.log("debug",i);
      if(this.local_storage[i].id==item.id)
      {

        this.local_storage[i].qty = item.qty;
       
        localStorage.setItem('cartItems',JSON.stringify(this.local_storage));
        this.subject.next(this.local_storage);
        console.log('item already exists in cart');
        done = true;
        break;
      }
    }

    
      
      for(let i in this.local_storage)
      {
        //console.log("debug",this.cartItems);
       let mybool = false;
        if(this.local_storage[i].id==item.id)
        {
          for(let i in this.cartItems)
          {
            if(this.cartItems[i].id==item.id) {
              this.cartItems[i].qty = this.local_storage[i].qty;
              mybool = true;
              break;}
          }

          if(mybool==false) this.cartItems.push(this.local_storage[i]);
        }

      }



    
  
    localStorage.setItem('cartItems',JSON.stringify(this.cartItems));
     this.subject.next(this.cartItems);

  }
}


getCartItems(){
 this.local_storage = JSON.parse(localStorage.getItem('cartItems') || '[]');
 console.log("Local Storage",this.local_storage);
 this.subject.next(this.local_storage);
 this.cartItems = this.local_storage;
  return this.subject.asObservable();
}




deleteItem(item:Product){
  for(let i in this.cartItems)
  {


    if(this.cartItems[i].id==item.id)
    {
      this.cartItems.splice(parseInt(i),1);
      localStorage.setItem('cartItems',JSON.stringify(this.cartItems));
      this.subject.next(this.cartItems);
      console.log('item deleted from cart');
      break;
    }
  }

}

addQty(item:Product){
  let my_cart = JSON.parse(localStorage.getItem('cartItems') || '[]');

  for(let i in my_cart){
    if(my_cart[i].id==item.id){
      my_cart[i].qty++;
      localStorage.setItem('cartItems',JSON.stringify(my_cart));
      this.subject.next(my_cart);
      console.log('item qty increased');
      break;
    }
  }
}

numberOfItems(){
  let my_cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
  // let count = 0;
  // for(let i in my_cart){
  //   count+=my_cart[i].qty;
  // }
  return my_cart.length;
}

clearCart(){
  localStorage.removeItem('cartItems');
}


  
}
