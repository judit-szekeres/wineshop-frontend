import { Component, OnInit } from '@angular/core';
import { UserShipping } from "src/app/interfaces/user-shipping";
import { UserHttpService } from "src/app/services/user-http.service";
import { Country } from "src/app/interfaces/country";

@Component({
    selector: "app-checkout",
    templateUrl: "./checkout.component.html",
    styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent implements OnInit {

    countries: Country[];
    checkboxState: boolean;
    userShipping: UserShipping;

    constructor( private checkoutRequest: UserHttpService ) {
        this.userShipping = {
            shippingAddress: {
                firstName: "",
                lastName: "",
                street: "",
                city: "",
                id: -1
            },
            billingAddress: {
                firstName: "",
                lastName: "",
                street: "",
                city: "",
                id: -1
            }
        };
        this.countries = [];
        this.checkboxState = false;
    }

    ngOnInit() {
        this.checkoutRequest.getCountriesList().then(c => {
            this.countries = c;
        });
    }

    billingSameAsShipping() {
        if (this.checkboxState == false) {
            this.userShipping.billingAddress = this.userShipping.shippingAddress;
        } else {
            this.userShipping.shippingAddress = {
                firstName: "",
                lastName: "",
                street: "",
                city: "",
                id: -1
            };
        }
    }
}
