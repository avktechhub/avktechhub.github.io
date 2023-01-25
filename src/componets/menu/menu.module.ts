import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu.component";
import { MenuBarService } from "./menu.service";

@NgModule({
    declarations:[MenuComponent],
    exports:[MenuComponent],
    imports: [CommonModule],
    providers: [MenuBarService],
})

export class MenuModule{

}