import { Component, OnInit } from '@angular/core';

type NewType = OnInit;

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.scss']
})

export class LoginForm implements OnInit {

    ngOnInit(): void {
        
    }
}