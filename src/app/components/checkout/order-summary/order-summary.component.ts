import { Component, OnInit, Input } from '@angular/core';
import { CheckoutDetails } from '../../../interfaces/checkout-details';
import { UserHttpService } from 'src/app/services/user-http.service';
import { CheckoutComponent } from 'src/app/components/checkout/checkout.component'

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  @Input()
  CheckoutDetails: CheckoutDetails;

  constructor( private UserHttpService: UserHttpService ) {

  }

  ngOnInit() {
    
  }

  confirmOrder() {
    this.UserHttpService.modifyCheckoutDetails(this.CheckoutDetails)
      .then()
      .catch(() => {
          console.log('Nem tudsz rendelni te kretén');
      });
    }
  }
  


