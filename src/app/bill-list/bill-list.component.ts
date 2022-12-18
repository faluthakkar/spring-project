import { Component, OnInit } from '@angular/core';
import { Bill } from '../bill';
import {  BillService } from '../bill.service';
@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

 bills!:Bill[];

 constructor(private billService:BillService){}

ngOnInit(){
this.billService.findAll().subscribe(data =>{
  this.bills = data;
});
}
}
