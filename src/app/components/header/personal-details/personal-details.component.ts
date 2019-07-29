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
    currentPasswordToChange: string;
    newPasswordToChange: string;
    confirmNewPasswordToChange: string;

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
        this.currentPasswordToChange = "";
        this.newPasswordToChange = "";
        this.confirmNewPasswordToChange = "";
    }

    ngOnInit() {
        this.userRequest.getCurrentUserPersonalDetails().then(uD => {
            this.currentUserDetails = uD;
        });
        this.userRequest.getCountriesList().then(c => {
            this.countries = c;
        })
    }

    modifyCurrentUserPersonalDetails() {
        this.userRequest.modifyUserPersonalDetails(this.currentUserDetails).then(() => {
            this.router.navigate(['/']);
            console.log(this.currentPasswordToChange);
            console.log(this.newPasswordToChange);
            console.log(this.confirmNewPasswordToChange);
        }).catch(() => { });
    }

    billingEqualsShipping() {
        if (this.checkboxValue == false) {
            this.currentUserDetails.shippingAddress = this.currentUserDetails.billingAddress;
        } else {
            this.currentUserDetails.shippingAddress = {
                street: "",
                city: "",
                id: -1
            }
        }
    }

    /*
    validatePassword(): boolean {
        if(this.newPasswordToChange === this.confirmNewPasswordToChange){
            this.currentUserDetails.newPassword = this.newPasswordToChange;
            this.currentUserDetails.confirmNewPassword = this.confirmNewPasswordToChange;
            return true;
        }
    }
    */
}
