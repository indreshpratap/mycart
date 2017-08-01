import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/admin/product/product.service";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-prod-edit',
    templateUrl: 'product-edit.component.html'
})

export class AdminProdEditComponent implements OnInit {

    alert: any;
    productForm: FormGroup;

    constructor(private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private productService: ProductService
    ) { }

    ngOnInit() {
        this.buildForm();
        this.productService
            .getProductById(this.activatedRoute.snapshot.params.id)
            .subscribe(res => {
                let data = res.json();
                /**
                 *  updating the form field values which we have got from this request.
                 *  Please note, object key must match with the name of formControlName
                 *  i.e {name:"samsung","category":"Mobile"}
                 */
          
                 
                this.productForm.patchValue(data);
            });
    }

    saveProduct() {
        this.productService.saveProduct(this.productForm.value).subscribe(res => {
            let data = res.json();
            if (data.status) {
                this.showMsg("Product saved", 1);
            } else {
                this.showMsg("Failed to save", 2);
            }
        },
            err => {
                console.log("Got error", err);
            });
    }


    private buildForm() {
        this.productForm = this.fb.group({
            "id": [, Validators.required],
            "name": ['', Validators.required],
            "price": ['', Validators.required],
            "category": ['', Validators.required],
            "color": ['', Validators.required],
            "description": ['', Validators.required],
            "quantity": [0, Validators.required]
        });
    }

    private showMsg(msg: string, type: number) {
        this.alert = {};
        this.alert.msg = msg;
        switch (type) {
            case 1: this.alert.cls = 'alert-sccess'; break;
            case 2: this.alert.cls = 'alert-danger'; break;
        }

        setTimeout(() =>
        { this.alert = null; }
            , 3000);
    }
}