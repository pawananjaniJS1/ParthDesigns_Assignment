import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {

  constructor() { }

  quantity = 1;


  inc(){
    this.quantity++;
  }

  dec(){
    if(this.quantity>0)this.quantity--;
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
  

  ngOnInit(): void {
  }


}
