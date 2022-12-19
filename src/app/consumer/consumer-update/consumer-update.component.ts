import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/consumer';
import { ConsumerService } from 'src/app/consumer.service';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-consumer-update',
  templateUrl: './consumer-update.component.html',
  styleUrls: ['./consumer-update.component.css']
})
export class ConsumerUpdateComponent  implements OnInit{


  consumers!:Consumer[];
  consumer!:Consumer;
id!:number
  update!:Consumer;
    constructor(private consumerService:ConsumerService ){
     // this.id=this.route.snapshot.paramMap
    }
   ngOnInit(){
   }
  
   onConsumerUpdate(){
    console.log(this.consumer)
   this.consumerService.updatebyId(1).subscribe(consumer=>{
    this.consumer=consumer;
    
   })
   }
}
