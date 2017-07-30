import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminModule,adminRoutes } from "./admin/admin.module";
import { Routes, RouterModule } from "@angular/router";
import { AppNavbarComponent } from "./navigation/app.navbar.component";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { SecurityGuard } from "./login/security.gaurd";

import { userRoutes, UserModule } from "./user/user.module";
import { SecurityService } from "./login/security.service";

const parentRoutes: Routes = [
  {
    path: "", component: HomeComponent, canActivate: [SecurityGuard],
    children: [
      { path: "user", children: [...userRoutes] },
      { path: "admin", children: [...adminRoutes] }
    ]
  },
  { path: "login", component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    UserModule,
    RouterModule.forRoot(parentRoutes)
  ],
  providers: [SecurityGuard, SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
