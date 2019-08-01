import { Component, OnInit } from '@angular/core';
import { CheckoutDetails } from '../interfaces/checkout-details';
import { UserHttpService } from 'src/app/services/user-http.service';
import { CheckoutComponent } from 'src/app/components/checkout/checkout.component'

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  constructor( private UserHttpService: UserHttpService ) {

  }

  ngOnInit() {
    
  }

  confirmOrder() {
    this.UserHttpService.modifyCheckoutDetails()

  }
}
