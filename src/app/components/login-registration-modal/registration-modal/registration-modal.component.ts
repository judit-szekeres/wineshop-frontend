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
  emailErrorMessage = 'Email already exist!';
  emailError : boolean;

  constructor(private userService: UserHttpService, private router: Router) {
    this.user = {
      email: '',
      password: '',
      passwordConfirm: ''
    }
    this.errors = '';
    this.emailError = false;
  }

  ngOnInit() {
  }

  submit(): void {
    this.userService.addUser(this.user).then(() => {
      this.router.navigate(['/reg-conf-page']);
      this.emailError = false;
    }).catch(userError => {
        this.errors = userError.error.code;
        if(this.errors == '409'){
            this.emailError = true;
        }
      });
  }
}
