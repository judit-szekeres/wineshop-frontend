import { Component, OnInit } from '@angular/core';
import { Address } from '../../interfaces/address';
import { User } from "src/app/interfaces/user";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  shippingAddress: Address;
  billingAddress: Address;
  checkAddress: boolean;

  

  constructor(  ) {
    this.shippingAddress = {
      firstname: '',
      lastname: '',
      street: '',
      city: '',
      country: ''
    }

    this.billingAddress = {
      firstname: '',
      lastname: '',
      street: '',
      city: '',
      country: ''
    };
    console.log("eddig jó");
  }

  ngOnInit() {

  }

  setBilling() {
    if (this.checkAddress) {
      
    }

  }

}
