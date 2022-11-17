import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('navContainer', { static: false }) nav!: ElementRef;

  constructor(private renderer: Renderer2) { }

  list = [
    { 'name': 'Home' },
    { 'name': 'About' },
    { 'name': 'Portfolio' },
    { 'name': 'Contact' },
    { 'name': 'Setting' }
  ]

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const navlist = this.nav.nativeElement;
    let Ul = document.createElement('ul');
    this.renderer.appendChild(navlist, Ul);
    
    this.list.filter((listname) => {return listname})
    .map((ln)=> {
      let li = document.createElement('li');
      let a = document.createElement('a');
      this.renderer.appendChild(Ul, li);
      this.renderer.appendChild(li, a);
      a.innerText = ln.name;
    });
  }
}
