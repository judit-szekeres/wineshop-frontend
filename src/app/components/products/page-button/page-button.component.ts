import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { PageButton } from 'src/app/interfaces/page-button';

@Component({
  selector: '[app-page-button]',
  templateUrl: './page-button.component.html',
  styleUrls: ['./page-button.component.css']
})
export class PageButtonComponent implements OnInit {

  @Input()
  pageButton:PageButton;

  @Output()
  refresh: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  refreshPage(){
    this.refresh.emit(this.pageButton.nr);
  }

}
