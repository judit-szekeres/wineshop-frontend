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

  constructor(private userService: UserHttpService, private router: Router) {
    this.user = {
      email: '',
      password: ''
    }
    this.errors = '';
    this.badData = false;
  }

  ngOnInit() {
  }
  submit(): void {
    this.userService.loginUser(this.user).then(() => {
      this.router.navigate(['']);
    }).catch(userError => {
        console.log(userError);
        this.errors = userError.status;
        if(this.errors == '401'){
            this.badData = true;
            console.log('Hibás login.')
        }
      });
  }

}
