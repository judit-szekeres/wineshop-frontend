import { Component, OnInit } from '@angular/core';
import { Usercredentials } from 'src/app/interfaces/usercredentials';
import { UserHttpService } from 'src/app/services/user-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  user: Usercredentials;
  errors: string;
  badData: boolean;
  emailNotValidEmail : boolean;
  emailNotRegistered : boolean;
  invalidPassword : boolean;
  emailNotValidEmailMessage = 'Invalid email address!';
  emailNotRegisteredMessage = 'Not registered email address!'
  invalidPasswordMessage = 'Incorrect password!';

  constructor(private userService: UserHttpService, private router: Router) {
    this.user = {
      email: '',
      password: ''
    }
    this.errors = '';
    this.emailNotRegistered = false;
    this.emailNotValidEmail = false;
    this.invalidPassword = false;
  }

  ngOnInit() {
  }
  submit(): void {
      this.emailNotValidEmail = false;
      this.invalidPassword = false;
    if(! this.isEmailValid() ){
        this.emailNotValidEmail = true;
    }else{
        this.userService.loginUser(this.user).then(() => {
          this.router.navigate(['']);
        }).catch(userError => {
            console.log(userError);
            this.errors = userError.status;
            if(this.errors == '401'){
                this.isEmailValid();
                console.log('Hibás login.')
            }
          });
    }

  }

  isEmailValid(): boolean {
        const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return this.user.email !== '' && emailRegexp.test(this.user.email);
    }
}
