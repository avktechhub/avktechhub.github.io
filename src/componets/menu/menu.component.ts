import { Component, ElementRef, OnInit, Renderer2, ViewChild, Input } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import{MenuBarService} from './menu.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('navContainer', { static: false }) nav!: ElementRef;

  @Input() navConfig:any;

  constructor(private renderer: Renderer2, private getCallback:MenuBarService) { }


  ngOnInit(): void {
    this.navConfig['selectCallback'] = this.getCallback
  }
  ngAfterViewInit() {
    
    //Main nav bar
    const navlist = this.nav.nativeElement;
    let Ul = document.createElement('ul');
    this.renderer.appendChild(navlist, Ul);

    this.navConfig.filter((listname:any) => { return listname })
      .map((ln:any) => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        this.renderer.appendChild(Ul, li);
        this.renderer.appendChild(li, a);
        let aText = a.innerText = ln.name;
        let disName = ln.name == undefined ? '' :  aText;
       a.addEventListener('click', this.selectCallback.bind(this, aText))

         //Add icon here.
        let addIcon = () => {
          if(ln.image){
            a.innerHTML = `<img src="${ln.imgURL}" alt="">`
          }
          else{
            a.innerHTML = 
            `<svg class="bi bi-x-circle" fill="#ec5e45" height="16"
                viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path
                     d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg> <span>${disName}</span>
            `
          }
         
        };

        //Condition for add icon or text.
        ln.icon || ln.image ? addIcon() : disName;

        //Dropdown code start here.
        if (ln.option) {
          let optUl = document.createElement('ul');
          li.appendChild(optUl);

          ln.optionlist.filter((optMenu: any) => { return optMenu })
            .map((optMenulist: any) => {
              let optLi = document.createElement('li'),
                  optA = document.createElement('a');
              optUl.appendChild(optLi)
              optLi.appendChild(optA)
              optA.innerText = optMenulist.name;
              optA.addEventListener('click', this.selectCallback.bind(optA.innerText))
            })
        }
      });
  }
  selectCallback(list:any){
    console.log("get", list);
      this.getCallback.sendMessage(list);
  }
}
