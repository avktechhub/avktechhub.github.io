import { Component, ElementRef, OnInit, Renderer2, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('navContainer', { static: false }) nav!: ElementRef;

  @Input() navConfig:Array<any>=[];

  constructor(private renderer: Renderer2) { }


  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const navlist = this.nav.nativeElement;
    let Ul = document.createElement('ul');
    this.renderer.appendChild(navlist, Ul);
    
    this.navConfig.filter((listname) => {return listname})
    .map((ln)=> {
      let li = document.createElement('li');
      let a = document.createElement('a');
      this.renderer.appendChild(Ul, li);
      this.renderer.appendChild(li, a);
      a.innerText = ln.name;
          if(ln.option){
              let optUl = document.createElement('ul');
              li.appendChild(optUl);
              
              ln.optionlist.filter((optMenu:any) => {return optMenu})
              .map((optMenulist:any)=> {
                let optLi = document.createElement('li'),
                optA = document.createElement('a');
                optUl.appendChild(optLi)
                optLi.appendChild(optA)
                optA.innerText = optMenulist.name;
              })

          }
    });
  }
}
