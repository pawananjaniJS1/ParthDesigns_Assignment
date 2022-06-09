import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  cartItems:Product[] = [];
  constructor(private cartService:CartServiceService) { }

  qty = this.cartItems.length;

  ngOnInit(): void {
        // "rxjs": "~7.5.0",
    this.cartService.getCartItems().subscribe((data:any)=>{
      console.log('data from cart service header',data);
      this.cartItems = data;
      this.qty = this.cartItems.length;
    })
  }


  deleteitem(item:Product){
    this.cartService.deleteItem(item);
    this.cartService.getCartItems().subscribe((data:any)=>{
       this.cartItems = this.cartItems.filter(x=>x.id!=item.id);
       this.qty = this.cartItems.length;
    });
  }

  addQty(item:Product){
    this.cartService.addQty(item);
  }


}
