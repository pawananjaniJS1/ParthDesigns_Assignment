import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {CartServiceService} from '../services/cart-service.service'
import {Product} from '../models/product.model'

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,private _router:Router,private cartService:CartServiceService) { }
   
  product:Product = new Product(0,'XYZ','Good product',101,1,'');

  inc(){
    this.product.qty++;
  }

  dec(){
    if(this.product.qty>0)this.product.qty--;
  }


  showList = true;
  showTxt1 = true;
  showTxt2 = true;
  showTxt3= true;

  toggleShow(id:any){
    if(id==1)this.showList=!this.showList;
    else if(id==2)this.showTxt1=!this.showTxt1;
    else if(id==3)this.showTxt2=!this.showTxt2;
    else if(id==4)this.showTxt3=!this.showTxt3;
  }
  

  addtoCart(){
    this.cartService.addToCart(this.product);
  }

  ngOnInit(): void {
  }


}
