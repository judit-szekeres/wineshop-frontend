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
  badData: boolean;

  constructor(private userService: UserHttpService, private router: Router) {
    this.user = {
      email: '',
      password: '',
      passwordConfirm: ''
    }
    this.errors = '';
    this.badData = false;
  }

  ngOnInit() {
  }

  submit(): void {
    this.userService.addUser(this.user).then(() => {
      this.router.navigate(['']);
    }).catch(userError => {
        console.log(userError);
        this.errors = userError.status;
        if(this.errors == '409'){
            this.badData = true;
            console.log('Már létező email.')
        }
      });
  }
}
