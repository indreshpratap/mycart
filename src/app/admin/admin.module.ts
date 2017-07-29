import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import { AdminProdListComponent } from "app/admin/product/product-list.component";
import { AdminProdRegComponent } from "app/admin/product/product-reg.component";
import { ProductService } from "app/admin/product/product.service";

const routes: Routes = [
    { path: 'admin-product-list', component: AdminProdListComponent },
    { path: 'admin-product-reg', component: AdminProdRegComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        HttpModule,
        FormsModule,ReactiveFormsModule
    ],
    exports: [],
    declarations: [AdminProdListComponent, AdminProdRegComponent],
    providers: [ProductService],
})
export class AdminModule { }
