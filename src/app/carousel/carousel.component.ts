import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

   id = 0;

  images = [
{  id:0,src: "./assets/images/prod_img1.svg",alt:"product image 1"},
{   id:1,src: "./assets/images/prod_img2.svg",alt:"product image 2"},
{ id:2,   src:"./assets/images/prod_img3.svg",alt:"product image 3"},
  {id:3,src: "./assets/images/prod_img4.svg",alt:"product image 4"},
   {id:4,src: "./assets/images/prod_img5.svg",alt:"product image 5"},
  ]

  updateSrc(id:any)
  {
   this.id = id;
  }

  incImg(){
   if(this.id<4) this.id++;
  }

  decImg(){
    if(this.id>0) this.id--;
   }

  ngOnInit(): void {
    
  }

}
