import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHttpService } from 'src/app/services/user-http.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    currentUserLoggedIn$: Observable<boolean>;
    currentUserAdmin$: Observable<boolean>;
    currentUserDetails$: Observable<User>;

  constructor(private router: Router, public userService: UserHttpService, public cartService:CartService) {
  }

  ngOnInit() {
      this.currentUserLoggedIn$ = this.userService.isUserLoggedIn();
      this.currentUserAdmin$ = this.userService.isUserAdmin();
      this.currentUserDetails$ = this.userService.getCurrentUser();
  }

  logoutUser():void {
      this.userService.logoutUser().then(() => {
          this.router.navigate(['/log-reg']);
          setTimeout(() => {
              this.router.navigate(['/']);
          }, 1);
      }).catch(() => {});
  }
}
