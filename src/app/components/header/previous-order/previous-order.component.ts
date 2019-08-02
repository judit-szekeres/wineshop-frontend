import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/interfaces/orders';
import { UserHttpService } from 'src/app/services/user-http.service';
@Component({
   selector: 'app-previous-order',
   templateUrl: './previous-order.component.html',
   styleUrls: ['./previous-order.component.css']
})
export class PreviousOrderComponent implements OnInit {
   previousOrders: Orders[];
   constructor(private userOrders: UserHttpService) {
       this.previousOrders = [];
   }
   ngOnInit() {
       this.userOrders.getUserPreviousOrders().then( orders => {
           for (let order of orders) {
               this.previousOrders.push(order);
           }
       })
   }
}
