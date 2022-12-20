import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { AddressService } from '../address.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

     address!: Address[];

  constructor(private addressService : AddressService){ }

  ngOnInit(): void{

   this.getAddress();
  }

  private getAddress(){
    this.addressService.getAddressList().subscribe(data => {
      this.address = data;
});
}

//delete
deleteAddress(id: any){

Swal.fire({
  icon:'info',
  title:'Are You Sure You Want To Delete?',
  confirmButtonText:'Delete',
  showCancelButton:true,
}).then((result)=>{
  if(result.isConfirmed){
    this.addressService.deleteAddress(id).subscribe(
      (data)=>{
        this.address=  this.address.filter((address)=> address.id !=id);
        Swal.fire('Success','Address Id Deleted,','success')
      },(error)=>{
        Swal.fire('Error',' Error in deleting Address Id ,','error')
      }
     );
  }
})











}
}
