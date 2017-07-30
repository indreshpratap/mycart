import { Injectable } from '@angular/core';
import { Http } from "@angular/http/";
import { environment } from "../../environments/environment";

import 'rxjs/add/operator/map';

@Injectable()
export class SecurityService  {
  
    

    private loggedIn = false;

    private info;

    constructor(private http: Http) { }

    doLogin(form) {

        return this.http.post(`${environment.apiPath}dologin`, form)
            .map(res => {
                let data = res.json();
                if (data.status) {
                    this.setUserInfoAndMarkLoggedIn(data);
                    return true;
                } else {
                    return false;
                }

            });

    }

    fetchUserInfo() {
       return this.http.get(`${environment.apiPath}user-info`).map(res=>{
            let data = res.json();
             if (data.status) {
                    this.setUserInfoAndMarkLoggedIn(data);
                     return true;
                } else {
                    return false;
                }
                 
        });
    }

    doLogout(){
        return this.http.get(`${environment.apiPath}logout`).map(res=>{
            let data = res.json();
             if (data.status) {
                  this.logout();
                     return true;
                } else {
                    return false;
                }
                 
        });
    }

    get isLoggedIn() {
        return this.loggedIn;
    }

    get isAdmin(){
        return this.info.role === 'admin';
    }

    setUserInfoAndMarkLoggedIn(data) {
        this.info = data;
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
        this.info = null;
    }
}