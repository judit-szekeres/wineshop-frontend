import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHttpService } from 'src/app/services/user-http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    currentUserLoggedIn$: Observable<boolean>;

  constructor(private router: Router, public userService: UserHttpService) { }

  ngOnInit() {
      this.currentUserLoggedIn$ = this.userService.isUserLoggedIn();
  }
}
