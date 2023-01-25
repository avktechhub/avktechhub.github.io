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
        //Add icon here.
        let addIcon = () => {
          if(ln.image){
            a.innerHTML = `<img src="${ln.imgURL}" alt="">`
          }
          else{
            a.innerHTML = `<i></i>${disName}</span>`
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
              optMenulist['selectCallback'] = this.getCallback
              optA.addEventListener('click', this.selectCallback.bind(optA.innerText))
            })
            
            
        }
        ln.option ? '': a.addEventListener('click', this.selectCallback.bind(this, aText));
        
      });
  }
  selectCallback(list:any){
    console.log("get", list);
      this.getCallback.sendMessage(list);
  }
}
