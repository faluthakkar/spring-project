import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressSaveComponent } from './address-save/address-save.component';
import { AddressUpdateComponent } from './address-update/address-update.component';



@NgModule({
  declarations: [
    AddressSaveComponent,
    AddressUpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AddressModule { }
