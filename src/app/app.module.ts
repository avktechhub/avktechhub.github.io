import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/componets/footer/footer.component';
import { LoginComponent } from 'src/componets/login/login.component';
import { MenuComponent } from 'src/componets/menu/menu.component';
import { MenuBarService } from 'src/componets/menu/menu.service';
import { authInterceptorProviders } from 'src/_helper/auth.interceptor';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MenuBarService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
