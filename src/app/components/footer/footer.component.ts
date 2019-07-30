import { Component, OnInit } from '@angular/core';
import { Subscribe } from 'src/app/interfaces/subscribe';
import { SubscribeService } from 'src/app/services/subscribe.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    subscribe: Subscribe;

    notValidEmail: boolean;
    notValidEmailMessage = 'Invalid email address, please try again';
    clickSubmit: boolean;

    constructor(private subscribeService: SubscribeService, private router: Router) {
        this.subscribe = {
            email: ''
        }
    }
    ngOnInit() {
    }

    resetBooleanFields(): void {
        this.clickSubmit = true;
        this.notValidEmail = false;
    }

    submit(): void {
        this.resetBooleanFields();
        this.notValidEmail = false;

        this.notValidEmail = !this.isValidEmail();

        this.subscribeService.send(this.subscribe).then(() => {
            this.subscribe = {
                email: ''
            };
        }).catch(() => {
            alert('Server is not responding, please try again later');
        });

    }

    isValidEmail(): boolean {
        const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return this.subscribe.email !== '' && emailRegexp.test(this.subscribe.email);
    }

}
