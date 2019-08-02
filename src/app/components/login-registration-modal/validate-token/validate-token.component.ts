import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-validate-token',
  templateUrl: './validate-token.component.html',
  styleUrls: ['./validate-token.component.css']
})
export class ValidateTokenComponent implements OnInit {

  token: string;

  constructor(private route: ActivatedRoute, private router: Router, private userHttpService: UserHttpService) { }

  ngOnInit() {
    console.log('hello');
    this.token = this.route.snapshot.paramMap.get('token');
    this.userHttpService.validateUser(this.token).then(() => {
      this.router.navigate(['/successful-registration-page']);
    }).catch(() => {
      this.router.navigate(['/full']);
    });
  }

}
