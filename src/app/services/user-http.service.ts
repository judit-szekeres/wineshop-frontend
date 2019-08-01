import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { serverURL } from '../server-url';
import { UserDetails } from '../interfaces/user-details';
import { Country } from '../interfaces/country';
import { Orders } from '../interfaces/orders';
import { CheckoutDetails } from '../interfaces/checkout-details';

@Injectable({
    providedIn: "root"
})
export class UserHttpService {
    readonly unknownUser: User;
    readonly loggedOutUser: User;
    currentUser: User;
    requestInProcess: Observable<boolean>;

    constructor(private http: HttpClient) {
        this.unknownUser = {
            id: null,
            email: "",
            isValidated: null
        };
        this.loggedOutUser = {
            id: 0,
            email: "",
            isValidated: null
        };
        this.currentUser = this.unknownUser;
    }

    addUser(user: User): Promise<User> {
        return this.http
            .post(serverURL + "/registration", user, { withCredentials: true })
            .toPromise() as Promise<User>;
    }

    loginUser(user: User): Promise<User> {
        const formData = new FormData();
        formData.append("username", user.email);
        formData.append("password", user.password);
        return this.http
            .post(serverURL + "/login", formData, { withCredentials: true })
            .toPromise()
            .then(u => (this.currentUser = u as User)) as Promise<User>;
    }

    getCurrentUser(): Observable<User> {
        if (this.currentUser.id !== null) {
            return of(this.currentUser);
        } else {
            let o = this.http.get(serverURL + "/user", {
                withCredentials: true
            });
            o.subscribe(
                u => (this.currentUser = u as User),
                () => this.loggedOutUser
            );
            return o as Observable<User>;
        }
    }

    isUserLoggedIn(): Observable<boolean> {
        if (this.currentUser.id === 0) {
            return of(false);
        } else if (this.currentUser.id !== null) {
            return of(true);
        } else {
            let o = this.http.get(serverURL + "/user", {
                withCredentials: true
            });
            return o.pipe(catchError(() => of(this.loggedOutUser))).pipe(
                map(u => {
                    this.currentUser = u as User;
                    return !!(u as User).id;
                })
            );
        }
    }

    logoutUser(): Promise<null> {
        return this.http
            .post(serverURL + "/logout", "", { withCredentials: true })
            .toPromise()
            .then(() => {
                this.currentUser = this.loggedOutUser;
            }) as Promise<null>;
    }

    validateUser(token: string): Promise<null> {
        return this.http
            .get(serverURL + "/validation?token=" + token, {
                withCredentials: true
            })
            .toPromise() as Promise<null>;
    }

    getCurrentUserPersonalDetails(): Promise<UserDetails> {
        return this.http
            .get(serverURL + "/user/settings", { withCredentials: true })
            .toPromise()
            .then(response => response) as Promise<UserDetails>;
    }

    getCountriesList(): Promise<Country[]> {
        return this.http
            .get(serverURL + "/countries", { withCredentials: true })
            .toPromise()
            .then(response => response) as Promise<Country[]>;
    }

    modifyUserPersonalDetails(modifyDetails: UserDetails): Promise<null> {
        return this.http
            .post(serverURL + "/user/settings", modifyDetails, {
                withCredentials: true
            })
            .toPromise()
            .then(() => {}) as Promise<null>;
    }

    getUserPreviousOrders(): Promise<Orders[]> {
        return this.http
            .get(serverURL + "/user/orders", { withCredentials: true })
            .toPromise()
            .then(response => response) as Promise<Orders[]>;
    }

    getExistingEmail(email: Object): Promise<null> {
        console.log(email);
        return this.http
            .post(serverURL + "/forgot-password", email, {
                withCredentials: true
            })
            .toPromise()
            .then(response => response) as Promise<null>;
    }

    getResetPassword(): Promise<null> {
        return this.http
            .post(serverURL + "/reset-password", "", { withCredentials: true })
            .toPromise()
            .then(response => response) as Promise<null>;
    }

    getCheckoutDetails(): Promise<CheckoutDetails> {
        return this.http
            .get(serverURL + "/cart/confirm", { withCredentials: true })
            .toPromise()
            .then(response => response) as Promise<CheckoutDetails>;
    }

    modifyCheckoutDetails(): Promise<CheckoutDetails> {
        return this.http
            .post(serverURL + "/cart/confirm", { withCredentials: true })
            .toPromise()
            .then(response => response) as Promise<CheckoutDetails>;
    }
}
