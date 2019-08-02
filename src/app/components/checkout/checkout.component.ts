import { Component, OnInit } from '@angular/core';
import { UserHttpService } from "src/app/services/user-http.service";
import { Country } from "src/app/interfaces/country";
import { CheckoutDetails } from "src/app/interfaces/checkout-details";

@Component({
    selector: "app-checkout",
    templateUrl: "./checkout.component.html",
    styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent implements OnInit {
    countries: Country[];
    checkboxState: boolean;
    currentUserDetails: CheckoutDetails;

    constructor(private userService: UserHttpService) {
        this.currentUserDetails = {
            firstName: "",
            lastName: "",
            addresses: [
                {
                    street: "",
                    city: "",
                    id: 0
                },
                {
                    street: "",
                    city: "",
                    id: 0
                }
            ]
        };
        this.countries = [];
        this.checkboxState = false;
    }

    ngOnInit() {
        this.userService.getCheckoutDetails().then(uD => {
            this.currentUserDetails = uD;
        });

        this.userService.getCountriesList().then(c => {
            this.countries = c;
        });
    }

    billingSameAsShipping() {
        if (this.checkboxState == false) {
            this.currentUserDetails.addresses[1] = this.currentUserDetails.addresses[0];
        } else {
            this.currentUserDetails.addresses[1] = {
                street: "",
                city: "",
                id: -1
            };
        }
    }
}
