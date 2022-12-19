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
import { BillListComponent } from './bill-list/bill-list.component';
import { BillbyidComponent } from './billbyid/billbyid.component';import { ConsumerDeleteComponent } from './consumer/consumer-delete/consumer-delete.component';
import { ConsumerSaveComponent } from './consumer/consumer-save/consumer-save.component';
import { ConsumerUpdateComponent } from './consumer/consumer-update/consumer-update.component';
import { AddressSaveComponent } from './address/address-save/address-save.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent,
    NavbarComponent,
    BillgenerationComponent,
    BillListComponent,
    BillbyidComponent,
    ConsumerSaveComponent,
    ConsumerUpdateComponent,
    ConsumerDeleteComponent,
    AddressSaveComponent,
    LoginComponent
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
