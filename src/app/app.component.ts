import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuBarService } from 'src/componets/menu/menu.service';

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
  

  constructor(){
    this.list = [
      { 'name': 'Home',
       },
      { 'name': 'About',
      optionlist :[
          { 'name': 'vision' },
          { 'name': 'Mission' },
          { 'name': 'Partner' },
          { 'name': 'Leadership' }
        ],
        'option': true
     },
      { 'name': 'Serivces',
        'icon':true,
      optionlist :[
          { 'name': 'School managment' },
          { 'name': 'Employee Managment' }
        ],
        'option': true },
      { 'name': 'Contact' },
      { 'name': 'Setting' },
      { 'name': 'Sitmap'}
    ]

    this.profileNav =[{ 
      'name':'',
      'image':true,
      'imgURL':'https://scontent.fbom6-1.fna.fbcdn.net/v/t39.30808-1/277149398_5327575743941365_381370252198413949_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=04EKK0oUYNYAX-SWyrl&_nc_oc=AQnFxMMNwEcSwuFNnIC5b5JAjWxVTBoJsYxpOcAdmM_d12w7zSX5QaMuJZ8zvOGx-WQ&_nc_ht=scontent.fbom6-1.fna&oh=00_AfCq_yl0l1cGrvtcosMXz9crMRNyTXFRfXBj548SZC7Hkw&oe=638A67E7',
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

    })
    this.subscription = this.list['selectCallback'].getMessage().subscribe((data:any) =>{

      alert("your callback fire for  = " + data)

    })
  }
}
