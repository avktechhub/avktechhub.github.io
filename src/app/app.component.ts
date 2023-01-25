import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from 'src/componets/login/login.model'

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
  subscription2:any = Subscription
  

  constructor(){
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
        'name': 'Book Store',
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
        alert("your callback fire for  = " + data)
    });
    this.subscription2 = this.list[1]['selectCallback'].getMessage().subscribe((data:any) =>{
      alert("your callback fire for  = " + data)
  })
  }
}
