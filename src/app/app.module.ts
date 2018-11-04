import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModuleModule } from './shared-module/shared-module.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SharedService } from './shared.service';
import { LoginComponent } from './login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule
  ],
  providers: [
  SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
