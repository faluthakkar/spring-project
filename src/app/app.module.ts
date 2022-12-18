import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressListComponent } from './address-list/address-list.component';
import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BillgenerationComponent } from './billgeneration/billgeneration.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from 
    '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';



//import ReactiveFormsModule here
import { ReactiveFormsModule } from '@angular/forms';
import { BillListComponent } from './bill-list/bill-list.component';;

@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent,
    NavbarComponent,
    BillgenerationComponent,
    BillListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
