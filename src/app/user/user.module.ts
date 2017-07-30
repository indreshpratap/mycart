import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { ProdListComponent } from "app/user/product-list.component";
import { CartComponent } from "app/user/carts.component";

export const userRoutes: Routes = [
    { path: 'products', component: ProdListComponent },
    { path: 'cart', component: CartComponent },
];

// export const adminRouting: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [
        // adminRouting,
        CommonModule,
        HttpModule,
        FormsModule, ReactiveFormsModule
    ],
    exports: [],
    declarations: [ProdListComponent,CartComponent],
    providers: [],
})
export class UserModule { }
