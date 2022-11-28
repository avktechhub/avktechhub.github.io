import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bizo';
  list:any;

  constructor(){
    this.list = [
      { 'name': 'Home' },
      { 'name': 'About',
      optionlist :[
          { 'name': 'vision' },
          { 'name': 'Mission' },
          { 'name': 'Partner' },
          { 'name': 'Leadership' }
        ],
        'option': true
     },
      { 'name': 'Portfolio',
      optionlist :[
          { 'name': 'Sevices' },
          { 'name': 'Project' }
        ],
        'option': true },
      { 'name': 'Contact' },
      { 'name': 'Setting' },
      { 'name': 'Sitmap'}
    ]
  }

  ngOninit (){
  }
}
