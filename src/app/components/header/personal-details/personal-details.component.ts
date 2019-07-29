import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/services/user-http.service';
import { UserDetails } from 'src/app/interfaces/user-details';
import { Country } from 'src/app/interfaces/country';
import { Router } from '@angular/router';

@Component({
    selector: 'app-personal-details',
    templateUrl: './personal-details.component.html',
    styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

    countries: Country[];
    currentUserDetails: UserDetails;
    checkboxValue: boolean;

    constructor(private userRequest: UserHttpService, private router: Router) {
        this.currentUserDetails = {
            firstName: '',
            lastName: '',
            email: '',
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
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
        }
        this.countries = [];
        this.checkboxValue = false;
    }

    ngOnInit() {
        this.userRequest.getCurrentUserPersonalDetails().then(uD => {
            this.currentUserDetails = uD;
            console.log(this.currentUserDetails);
        });
        this.userRequest.getCountriesList().then(c => {
            this.countries = c;
        })
    }

    modifyCurrentUserPersonalDetails() {
        this.userRequest.modifyUserPersonalDetails(this.currentUserDetails).then(() => {
            this.router.navigate(['/']);
        }).catch(() => { });
    }

    billingEqualsShipping() {
        if (this.checkboxValue == false) {
            console.log(this.checkboxValue);
            this.currentUserDetails.shippingAddress = this.currentUserDetails.billingAddress;
        } else {
            console.log(this.checkboxValue);
            this.currentUserDetails.shippingAddress = {
                street: "",
                city: "",
                id: -1
            }
        }
    }
}
