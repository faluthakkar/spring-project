import { Component, OnInit } from '@angular/core';
import { Bill } from '../bill';
import {  BillService } from '../bill.service';
@Component({
  selector: 'app-billbyid',
  templateUrl: './billbyid.component.html',
  styleUrls: ['./billbyid.component.css']
})
export class BillbyidComponent  implements OnInit{
  bills!:Bill[];
bill!:Bill;

  constructor(private billService:BillService){}
 ngOnInit(){
 }

 onSubmit(){
  this.billService.getById(1).subscribe(bill =>{
    this.bill = bill;
  });
 }
}


