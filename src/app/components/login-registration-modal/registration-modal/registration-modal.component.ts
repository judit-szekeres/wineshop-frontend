import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserHttpService } from 'src/app/services/user-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css']
})

export class RegistrationModalComponent implements OnInit {

  user: User;
  errors: string;
  emailAlreadyExistMessage = 'Email already exists!';
  emailNotValidEmailMessage = 'Invalid email address!';
  passwordNotInRangeMessage = 'The password must be between 5-20 characters!';
  passwordDoesNotMatchMessage = 'Password does not match!'
  checkboxValueMessage = 'Please accept the Terms of services!';
  emailAlreadyExist : boolean;
  emailNotValidEmail : boolean;
  passwordNotInRange : boolean;
  passwordDoesNotMatch : boolean;
  checkboxValue : boolean;
  clickSubmit : boolean;

  constructor(private userService: UserHttpService, private router: Router) {
    this.user = {
      email: '',
      password: '',
      passwordConfirm: ''
    }
    this.errors = '';
    this.emailAlreadyExist = false;
    this.emailNotValidEmail = false;
    this.passwordNotInRange = false;
    this.passwordDoesNotMatch = false;
    this.checkboxValue = false;
    this.clickSubmit = false;
  }

  ngOnInit() {
  }

  submit(): void {
      this.clickSubmit = true;
      this.emailAlreadyExist = false;
      this.emailNotValidEmail = false;
      this.passwordNotInRange = false;
      this.passwordDoesNotMatch = false;
    if(this.user.password !== this.user.passwordConfirm){
        this.passwordDoesNotMatch = true;
    }else if(this.checkboxValue){
        this.userService.addUser(this.user).then(() => {
          this.router.navigate(['/reg-conf-page']);
        }).catch(userError => {
            console.log(userError);
            this.errors = userError.error.error;
            if(this.errors == 'alreadyExist'){
                this.emailAlreadyExist = true;
            }else if(this.errors == 'notValidEmail'){
                this.emailNotValidEmail = true;
            }else if(this.errors == 'notInRange'){
                this.passwordNotInRange = true;
            }
          });
    }

  }
}
