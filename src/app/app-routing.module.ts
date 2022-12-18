import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillgenerationComponent } from './billgeneration/billgeneration.component';

const routes: Routes = [
 

    { path: 'bill', component: BillListComponent },
    { path: 'generatebillbyid', component: BillgenerationComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
