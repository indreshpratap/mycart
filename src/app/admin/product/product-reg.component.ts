import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/admin/product/product.service";

@Component({
    selector: 'app-admin-prod-reg',
    templateUrl: 'product-reg.component.html'
})

export class AdminProdRegComponent implements OnInit {

    alert: any;
    
    constructor(private productService: ProductService) { }
    
    ngOnInit() { }

    saveProduct(form: any) {
        this.productService.saveProduct(form.value).subscribe(res => {
            let data = res.json();
            if (data.status) {
                this.showMsg("Product saved",1);
            }else {
                this.showMsg("Failed to save",2);
            }
        },
    err=> {
        console.log("Got error",err);
    });
    }

    private showMsg(msg: string, type: number) {
        this.alert = {};
        this.alert.msg = msg;
        switch (type) {
            case 1: this.alert.cls = 'alert-sccess'; break;
            case 2: this.alert.cls = 'alert-danger'; break;
        }

        setTimeout(()=>
        { this.alert=null;}
        ,3000);
    }
}