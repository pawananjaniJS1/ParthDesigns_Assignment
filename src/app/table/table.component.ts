import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
 
  table1:{name:string,rows:{name:string,value:string}[]}={name:'General',rows:[
    {name:'Model Number' ,value:'8QERH7602'},
    {name:'Seating Capacity' ,value:'1 Seater'},
    {name:'Suitable For' ,value:'Seating, Outdoor & Cafeteria, Living Room'},
    {name:'Armrest' ,value:'Yes'},
    {name:'Upholstery' ,value:'Yes'},
    {name:'Footrest' ,value:'No'},
    {name:'Type' ,value:'Rocking Chairs'},
    {name:'Finish Type' ,value:'Natural'},
    {name:'Delivery Condition' ,value:'Pre-assembled'},
    {name:'Care Instructions' ,value:'Wipe gently with medium wet cloth'},
  ]};
  
  table2:{name:string,rows:{name:string,value:string}[]}={name:'Materials & Colours',rows:[
    {name:'Primary Material',value:'Foam'},
    {name:'Primary Material (Sub)',value:'Cotton'},
    {name:'Secondary Material',value:'Solid Wood'},
    {name:'Secondary Material (Sub)',value:'Cotton'},
    {name:'Primary Colour',value:'Grey'},
    {name:'Finish Colour',value:'Grey'},
    {name:'Upholstery Colour',value:'Grey'},
  ]};
  table3:{name:string,rows:{name:string,value:string}[]}={name:'Dimensions',rows:[
    {name:'Width',value:'40 mm'},
    {name:'Height',value:'24 mm'},
    {name:'Depth',value:'37 mm'},
    {name:'Weight',value:'14 kg'}
  ]};


  showTable1 = true;
  showTable2 = true;
  showTable3 = true;

  toggleShow(id:any){

    console.log(id)
    if(id==1) this.showTable1 = !this.showTable1;
    
    else if(id==2) this.showTable2 = !this.showTable2;

    else if(id==3) this.showTable3 = !this.showTable3;
  }





  ngOnInit(): void {
  }

}
