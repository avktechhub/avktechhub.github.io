import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

Injectable({
    providedIn:'root'
})

const AUTH_API = 'http://localhost:8080/api/auth/'; 
const httpOption = {
    headers : new HttpHeaders({'Content-Type':'application/json'})
};

export class AuthService{
            constructor(private http:HttpClient){}
    login(username:string, password:string) : Observable <any>{
        return this.http.post(AUTH_API + 'signin', {username, password}, httpOption);
    }
    register(username:string, email:string,password:string) : Observable <any>{
        return this.http.post(AUTH_API + 'signup', {username, email, password}, httpOption);
    }

}