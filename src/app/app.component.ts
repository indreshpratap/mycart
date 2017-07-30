import { Component, OnInit } from '@angular/core';
import { SecurityService } from "app/login/security.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router:Router,private secService: SecurityService){

  }
    ngOnInit(): void {
    this.secService.fetchUserInfo().subscribe(res=>{
      if(res) {
        this.router.navigate(["/user/products"]);
      }
    })
    }
}
