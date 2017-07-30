import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/admin/product/product.service";

@Component({
    selector: 'app-admin-prod-list',
    templateUrl: 'product-list.component.html'
})

export class AdminProdListComponent implements OnInit {
    products:Array<any>;
    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.fetchProducts();
     }

     fetchProducts(){
         this.productService.getAllProducts().subscribe(res=> this.products = res.json());
     }
}