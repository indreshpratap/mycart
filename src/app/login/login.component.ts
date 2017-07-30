import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

import { Router } from "@angular/router";
import { SecurityService } from "app/login/security.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent implements OnInit {

  alert = { msg: null, cls: null };

  constructor(private router: Router, private secService:SecurityService) { }

  ngOnInit() { }

 doLogin(form) {
   this.alert = { msg: null, cls: null };
   if(form.valid){
      this.secService.doLogin(form.value).subscribe(success=> {
        if(success){
          this.alert = {msg: "Login successful",cls:'alert-success'};
          setTimeout(()=> {
            this.router.navigate(["/"]);
          },3000);
        }else {
          this.alert = {msg: "Username or password is incorrect",cls:'alert-danger'};
        }
      });
   }
 }

  

}
