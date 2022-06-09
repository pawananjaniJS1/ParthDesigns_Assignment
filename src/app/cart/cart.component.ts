import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../services/cart-service.service';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

   cartItems:Product[] = [];
  constructor(private cartService:CartServiceService) { }

   
   

  ngOnInit(): void {
        // "rxjs": "~7.5.0",
    this.cartService.getCartItems().subscribe((data:any)=>{
      console.log('data from cart service in cart',data);
      this.cartItems = data;
    })
  }


  deleteitem(item:Product){
    this.cartService.deleteItem(item);
    this.cartService.getCartItems().subscribe((data:any)=>{
     this.cartItems = this.cartItems.filter(x=>x.id!=item.id);
    });
  }

  addQty(item:Product){
    this.cartService.addQty(item);
  }

}
