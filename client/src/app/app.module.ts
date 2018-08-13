import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRouterModule } from './app-router';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule } from '@angular/flex-layout';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeaderComponent } from './layout/header/header.component';
import { LeftpanelComponent } from './layout/leftpanel/leftpanel.component';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftpanelComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FlexLayoutModule,
    HttpModule,
    AuthenticationModule,
    DashboardModule,
    AppRouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
