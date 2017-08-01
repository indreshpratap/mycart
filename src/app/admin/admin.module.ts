import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { AdminProdListComponent } from "app/admin/product/product-list.component";
import { AdminProdRegComponent } from "app/admin/product/product-reg.component";
import { ProductService } from "app/admin/product/product.service";
import { AdminProdEditComponent } from "app/admin/product/product-edit.component";

export const adminRoutes: Routes = [
    { path: 'admin-product-list', component: AdminProdListComponent },
    { path: 'admin-product-reg', component: AdminProdRegComponent },
    { path: 'admin-product-edit/:id', component: AdminProdEditComponent },
];

// export const adminRouting: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [
        // adminRouting,
        CommonModule,
        HttpModule,
        FormsModule, ReactiveFormsModule,
        RouterModule
    ],
    exports: [],
    declarations: [AdminProdListComponent, AdminProdRegComponent,AdminProdEditComponent],
    providers: [ProductService],
})
export class AdminModule { }
