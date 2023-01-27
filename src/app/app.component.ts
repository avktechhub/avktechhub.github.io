import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from 'src/componets/login/login.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bizo';
  list:any;
  profileNav:any;
  subscription:any = Subscription
  
  constructor(public router:Router){
    this.list = [
      {
        'name': 'Attendance',
        'icon':true,
        'iconUrl':''
      },
      {
        'name': 'Class Diary',
        'icon':true,
        optionlist :[
          { 'name': 'Time Table' },
          { 'name': 'Report Card' },
          { 'name': 'Event' }
        ],
        'option': true
      },
      {
        'name': 'Store',
        'icon': true,
      },
      { 
        'name': 'Gallery',
        'icon':true,
     },
      { 
        'name': 'Transport',
        'icon':true, },
      { 
        'name': 'Parent Feedback',
        'icon':true,}
    ]

    this.profileNav =[{ 
      'name':'',
      'image':true,
      'imgURL':'',
    optionlist :[
        { 'name': 'Edit profile' },
        { 'name': 'Setting' },
        { 'name': 'Logout' }
      ],
      'option': true
   }]
  }

  ngOninit (){
  }

  ngAfterViewInit(){
    this.subscription = this.list['selectCallback'].getMessage().subscribe((data:any) =>{
        this.router.navigate([data]);
    });
  }
}
