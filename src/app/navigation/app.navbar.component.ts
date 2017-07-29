import { Component } from "@angular/core";

@Component({
    selector:'app-navbar',
    templateUrl:'./app-navbar.component.html'
})
export class AppNavbarComponent {
appBrand:string ='E cart';

test() {
    this.appBrand ="0";
}
}