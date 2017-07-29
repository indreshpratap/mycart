import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminModule } from "app/admin/admin.module";
import { Routes, RouterModule } from "@angular/router";
import { AppNavbarComponent } from "app/navigation/app.navbar.component";

const parentRoutes:Routes = [];


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    RouterModule.forRoot(parentRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
