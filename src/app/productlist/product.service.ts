import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn:'root'
})
export class ProductService{
    getProducts():IProduct[]{
return[ {
            "productId":2,
            "productName":'Garden Cart',
            "productCode":' CDG-300',
            "releaseDate": 'march 19',
            "price":32.99,
            "starRating":4.2,
            "imageUrl":"welcome.jpg"
          },
          {
            "productId":2,
            "productName":'Garden Cart1',
            "productCode":'THX-400',
            "releaseDate": 'march 20',
            "price":32.00,
            "starRating":4.5,
            "imageUrl":"welcome1.jpg"
          }
    ]
}
}