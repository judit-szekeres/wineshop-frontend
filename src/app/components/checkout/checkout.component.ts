import { Component, OnInit } from '@angular/core';
import { UserHttpService } from "src/app/services/user-http.service";
import { Country } from "src/app/interfaces/country";
import { UserDetails } from "src/app/interfaces/user-details"

@Component({
    selector: "app-checkout",
    templateUrl: "./checkout.component.html",
    styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent implements OnInit {
    countries: Country[];
    checkboxState: boolean;
    currentUserDetails: UserDetails;

    constructor(private userService: UserHttpService) {
        this.currentUserDetails = {
            firstName: "",
            lastName: "",
            email: "",
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
            shippingAddress: {
                street: "",
                city: "",
                id: -1
            },
            billingAddress: {
                street: "",
                city: "",
                id: -1
            }
        };
        this.countries = [];
        this.checkboxState = false;
    }

    ngOnInit() {
        this.userService.getCountriesList().then(c => {
            this.countries = c;
        });
    }

    billingSameAsShipping() {
        if (this.checkboxState == false ) {
            this.currentUserDetails.billingAddress = this.currentUserDetails.shippingAddress;
        } else {
            this.currentUserDetails.billingAddress = {
                street: "",
                city: "",
                id: -1
            };
        }
    }
}
