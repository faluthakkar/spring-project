import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillgenerationComponent } from './billgeneration/billgeneration.component';
import { BillbyidComponent } from './billbyid/billbyid.component';
import { ConsumerUpdateComponent } from './consumer/consumer-update/consumer-update.component';
import { AddressUpdateComponent } from './address/address-update/address-update.component';
import { AddressListComponent } from './address-list/address-list.component';
const routes: Routes = [
 

    { path: 'bill-list', component: BillListComponent },
    { path: 'generatebillbyid', component: BillgenerationComponent },
    {path: 'billbyid/:id', component: BillbyidComponent},
    {path: 'updateByIdConsumer/:id', component: ConsumerUpdateComponent}, 

      {path: 'address-list',
      component: AddressListComponent, // this is the component with the <router-outlet> in the template
      children: [
        {
          path: 'updateAddress/:id', // child route path
          component: AddressUpdateComponent, // child route component that the router renders
        }
      ]}
       











];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
