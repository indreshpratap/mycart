import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import {environment} from "../../environments/environment";

@Component({
    selector: 'app-prod-list',
    templateUrl: 'product-list.component.html'
})

export class ProdListComponent implements OnInit {
    products:Array<any>;
    constructor(private http: Http) { }

    ngOnInit() {
        this.fetchProducts();
     }

     fetchProducts(){
      this.http.get(`${environment.apiPath}user/get-all-products`).subscribe(res=> this.products = res.json());
     }

     addToCart(product){
         this.http.post(`${environment.apiPath}user/add-to-cart`,product).subscribe(res=>{
        let data = res.json();
        if(data.status){
            alert("Added to cart successfully");
        }
         });
     }
}