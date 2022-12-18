import { Component ,OnInit} from '@angular/core';
import { Bill } from '../bill';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-billgeneration',
  templateUrl: './billgeneration.component.html',
  styleUrls: ['./billgeneration.component.css']
})
export class BillgenerationComponent  {
  bill!:Bill;

  constructor( private billService:BillService, private route: ActivatedRoute,
    private router: Router) { 
      this.bill=new Bill();
    }

onSubmit(){
  this.billService.generateBillByConnectionId(this.bill.id,this.bill.newReading).subscribe(
    result =>this.gotoBillList());
}

gotoBillList(){
  this.router.navigate(['/bill']);
}
}
/*  submitMyPage(){
  
    this.billService.generateBillByConnectionId(this.id,this.currentReading).subscribe(any =>
      this.bill = this.id,this.currentReading
    ),alert('Bill Generated');
  }*/
  


   