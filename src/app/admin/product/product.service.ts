import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import {environment} from "../../../environments/environment";

@Injectable()
export class ProductService {

    constructor(private http:Http) { }

    saveProduct(product:any) {
        return this.http.post(environment.apiPath+'/admin/save-product',product);
    }

    getAllProducts() {
        return this.http.get(`${environment.apiPath}/admin/get-products`);
    }
}