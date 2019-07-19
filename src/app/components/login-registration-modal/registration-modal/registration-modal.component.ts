import { Component, OnInit, Input } from '@angular/core';
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
  errors: string[];

  constructor(private userService: UserHttpService, private router: Router) {
    this.user = {
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }

  ngOnInit() {
  }

  submit(): void {
    this.userService.addUser(this.user).then(() => {
      this.router.navigate(['landing-special-offers']);
    }).catch(userError => {
        this.errors = userError.errorInfos;
        console.log(this.errors);
      });
  }
}
