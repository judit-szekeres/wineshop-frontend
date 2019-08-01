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
        this.previousOrders = [{
            items: [{
                itemName: '',
                grossItemPrice: -1,
                quantity: -1,
                wineId: -1,
            }],
            shippingAddress: {
                street: '',
                city: '',
                country: '',
            },
            billingAddress: {
                street: '',
                city: '',
                country: '',
            },
            orderTime: '',
        }]
    }

    ngOnInit() {
        this.userOrders.getUserPreviousOrders().then( orders => {
            for (let order of orders) {
                this.previousOrders.push(order);
            }

            console.log('kapott orders');
            console.log(orders);

            this.previousOrders[0] = {
                items: [{
                    itemName: 'Bor 1',
                    grossItemPrice: 1000,
                    quantity: 1,
                    wineId: 12
                },
                {
                    itemName: 'Bor 3',
                    grossItemPrice: 1200,
                    quantity: 3,
                    wineId: 11
                }],
                shippingAddress: {
                    street: 'Kossuth u. 21',
                    city: 'Zalaegerszeg',
                    country: 'Hungary',
                },
                billingAddress: {
                    street: 'Kossuth u. 21',
                    city: 'Zalaegerszeg',
                    country: 'Hungary',
                },
                orderTime: '6/6/18',
            }
            this.previousOrders[1] = {
                items: [{
                    itemName: 'Bor 2',
                    grossItemPrice: 2000,
                    quantity: 2,
                    wineId: 11,
                }],
                shippingAddress: {
                    street: 'Kossuth u. 21',
                    city: 'Zalaegerszeg',
                    country: 'Hungary',
                },
                billingAddress: {
                    street: 'Kossuth u. 21',
                    city: 'Zalaegerszeg',
                    country: 'Hungary',
                },
                orderTime: '7/6/18',
            }

            console.log('mentett orders');
            console.log(this.previousOrders);
        })
    }

}
