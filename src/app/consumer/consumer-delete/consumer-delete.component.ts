import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/consumer';
import { ConsumerService } from 'src/app/consumer.service';

@Component({
  selector: 'app-consumer-delete',
  templateUrl: './consumer-delete.component.html',
  styleUrls: ['./consumer-delete.component.css']
})
export class ConsumerDeleteComponent  implements OnInit{
  consumers!:Consumer[];
  consumer!:Consumer;

  
    constructor(private consumerService:ConsumerService){}
   ngOnInit(){
   }
  
   onSubmit(){
   // this.billService.getById(1).subscribe(bill =>{
    //  this.bill = bill;
    }
   }

