import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/address.service';


@Component({
  selector: 'app-address-save',
  templateUrl: './address-save.component.html',
  styleUrls: ['./address-save.component.css']
})
export class AddressSaveComponent implements OnInit {
constructor(private addressService :AddressService
  ){}
public address={
  id: '',
  area: '',
  city: ''
};
ngOnInit(): void {}
onAddressSave(){
  console.log(this.address);
  if(this.address.id == '' || this.address.id ==null){
    alert('Id is Required !!');
    return;
  }

//this add address
this.addressService.addAddress(this.address).subscribe(
  (data)=>{
    console.log(data);
    alert('Address Registered Successfully')
    //success
  },
  (error)=>{

    console.log(error);
    alert('Something Went Wrong');
  }
  );

}
}
