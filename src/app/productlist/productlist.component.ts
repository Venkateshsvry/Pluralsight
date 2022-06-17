import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  color:string='red';
  colors:string='blue';
  showImage:boolean=true;
  private _listFilter1:string=' ';
  filterProducts:IProduct[]=[];
  set listFilter(value:string){
    this._listFilter1=value;
    console.log("In setter",value);
    this.filterProducts=this.performFilter(value);
   
  }
  get listFilter():string{
    return this._listFilter1;
  }
  
  products:IProduct[]=[]
toggleImage():void{
  this.showImage=!this.showImage;
}

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.filterProducts=this.products;
  }
  performFilter(filterBy:string):IProduct[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().includes(filterBy))
  }

}
