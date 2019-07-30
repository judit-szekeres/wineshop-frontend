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
    wrongPassword: boolean;
    wrongPasswordFromServer: boolean;
    wrongPasswordMessage = 'Password does not match!';
    wrongPasswordFromServerMessage = 'Incorrect password or are not long enough! The password must be between 5-20 characters!';
    currentPasswordToChange: any;
    newPasswordToChange: any;
    confirmNewPasswordToChange: any;

    constructor(private userRequest: UserHttpService, private router: Router) {
        this.currentUserDetails = {
            firstName: '',
            lastName: '',
            email: '',
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
            shippingAddress: {
                street: '',
                city: '',
                id: -1
            },
            billingAddress: {
                street: '',
                city: '',
                id: -1
            }
        }
        this.countries = [];
        this.checkboxValue = false;
        this.wrongPassword = false;
        this.currentPasswordToChange = "";
        this.newPasswordToChange = "";
        this.confirmNewPasswordToChange = "";
        this.wrongPasswordFromServer = false;
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
        if(this.validatePassword()){
            this.userRequest.modifyUserPersonalDetails(this.currentUserDetails).then(() => {
                this.router.navigate(['/']);
            }).catch(() => { this.wrongPasswordFromServer = true });
        }
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
    validatePassword(): boolean {
        if(this.currentUserDetails.newPassword === this.currentUserDetails.confirmNewPassword){
            return true;
        } else {
            this.currentUserDetails.newPassword = '';
            this.currentUserDetails.confirmNewPassword = '';
            this.currentUserDetails.currentPassword = '';
            this.wrongPassword = true;
        }
    }
}
