import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHttpService } from 'src/app/services/user-http.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    currentUserLoggedIn$: Observable<boolean>;
    currentUserDetails$: Observable<User>;

  constructor(private router: Router, public userService: UserHttpService) {
  }

  ngOnInit() {
      this.currentUserLoggedIn$ = this.userService.isUserLoggedIn();
      this.currentUserDetails$ = this.userService.getCurrentUser();
  }

  logoutUser():void {
      this.userService.logoutUser().then(() => {
          this.router.navigate(['/']);
      });
  }
}
