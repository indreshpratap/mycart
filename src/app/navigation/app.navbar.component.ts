import { Component, OnInit } from "@angular/core";
import { SecurityService } from "app/login/security.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-navbar',
    templateUrl: './app-navbar.component.html'
})
export class AppNavbarComponent implements OnInit {

    appBrand: string = 'E cart';

    isAdmin = false;
    constructor(private router:Router,private secService: SecurityService) {

    }

    ngOnInit(): void {
        this.isAdmin = this.secService.isAdmin;
    }


    test() {
        this.appBrand = "0";
    }

    doLogout(){
        this.secService.doLogout().subscribe(res=>{
            if(res) {
                this.router.navigate(['/login']);
            }
        });
    }
}