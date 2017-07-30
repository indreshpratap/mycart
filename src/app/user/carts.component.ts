import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { environment } from "../../environments/environment";

@Component({
    selector: 'app-user-cart',
    templateUrl: 'carts.component.html'
})

export class CartComponent implements OnInit {
    cart: Array<any>;
    totalPrice = 0;
    constructor(private http: Http) { }

    ngOnInit() {
        this.fetchCartItems();
    }

    fetchCartItems() {
        this.http.get(`${environment.apiPath}user/cart-items`).subscribe(res => {
            this.cart = res.json();
            this.calculateTotalPrice();
        });
    }
    removeCartItem(cartId) {
        if(confirm("Are you sure want to remove?")){
        this.http.get(`${environment.apiPath}user/remove-from-cart/${cartId}`).subscribe(res => {
        this.fetchCartItems();
        });
        }
    }

    calculateTotalPrice() {
        this.totalPrice = 0;
        this.cart.forEach(o => {
            this.totalPrice += o.price;
            console.log(this.totalPrice);
        });
    }

}