import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/componets/footer/footer.component';
import { LoginComponent } from 'src/componets/login/login.component';
import { authInterceptorProviders } from 'src/_helper/auth.interceptor';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { SvgIconComponent } from './svg.component';

import {HttpClientModule} from '@angular/common/http';
import { MenuModule } from 'src/componets/menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SvgIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenuModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
