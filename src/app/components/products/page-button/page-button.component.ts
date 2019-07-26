import { Component, OnInit, Input } from '@angular/core';
import { PageButton } from 'src/app/interfaces/page-button';

@Component({
  selector: 'app-page-button',
  templateUrl: './page-button.component.html',
  styleUrls: ['./page-button.component.css']
})
export class PageButtonComponent implements OnInit {

  @Input()
  pageButton:PageButton;

  constructor() {}

  ngOnInit() {
    console.log(this.pageButton);
  }

}
