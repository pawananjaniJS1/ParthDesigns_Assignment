export class Product {
    id:number = 0;
    name:string = '';
    description:string = '';
    price:number = 0;
    image:string = '';
    qty:number = 0;


    constructor(id:number,name:string,description:string,price:number,qty:number,image:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.qty = qty;
    }

}
