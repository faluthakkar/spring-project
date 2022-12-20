import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from 'src/app/address.service';

@Component({
  selector: 'app-address-update',
  templateUrl: './address-update.component.html',
  styleUrls: ['./address-update.component.css']
})
export class AddressUpdateComponent implements OnInit{
constructor(private route : ActivatedRoute,private addressService:AddressService){}

addressid:any
address1!:any;
ngOnInit(): void {
 this.addressid= this.route.snapshot.paramMap.get("address.id");
alert(this.addressid)
 this.address1.getAddressById(this.addressid).subscribe(
  (data:any)=>{
this.address1=data;
console.log(this.address1);
  },(error:any)=>{
   console.log(error);
  }
  )
}

}
