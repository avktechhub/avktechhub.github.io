import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/componets/footer/footer.component';
import { MenuComponent } from 'src/componets/menu/menu.component';
import { MenuBarService } from 'src/componets/menu/menu.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MenuBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
