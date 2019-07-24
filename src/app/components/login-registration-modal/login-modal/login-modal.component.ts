import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/services/user-http.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  user: User;
  errors: string;
  badData: boolean;
  emailNotValidEmail : boolean;
  emailNotRegisteredOrIncorrectPassword : boolean;
  emailNotValidEmailMessage = 'Invalid email address!';
  emailNotRegisteredOrIncorrectPasswordMessage = 'Not registered email address or incorrect password!';

  constructor(private userService: UserHttpService, private router: Router) {
    this.user = {
      email: '',
      password: ''
    }
    this.errors = '';
    this.emailNotRegisteredOrIncorrectPassword = false;
    this.emailNotValidEmail = false;
  }

  ngOnInit() {
  }
  submit(): void {
      this.emailNotValidEmail = false;
      this.emailNotRegisteredOrIncorrectPassword = false;
    if(! this.isEmailValid() ){
        this.emailNotValidEmail = true;
    }else{
        this.userService.loginUser(this.user).then( response => {
          this.router.navigate(['']);
        }).catch(() => {
            this.emailNotRegisteredOrIncorrectPassword = true;
        });
    }
  }

  isEmailValid(): boolean {
        const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return this.user.email !== '' && emailRegexp.test(this.user.email);
    }
}
