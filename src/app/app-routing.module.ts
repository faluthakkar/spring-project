import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillgenerationComponent } from './billgeneration/billgeneration.component';
import { BillbyidComponent } from './billbyid/billbyid.component';
import { ConsumerUpdateComponent } from './consumer/consumer-update/consumer-update.component';
const routes: Routes = [
 

    { path: 'bill-list', component: BillListComponent },
    { path: 'generatebillbyid', component: BillgenerationComponent },
    {path: 'billbyid/:id', component: BillbyidComponent},
    {path: 'updateByIdConsumer/:id', component: ConsumerUpdateComponent} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
