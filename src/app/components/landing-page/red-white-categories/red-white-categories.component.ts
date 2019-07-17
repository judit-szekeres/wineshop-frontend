import { Component, OnInit } from '@angular/core';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-red-white-categories',
  templateUrl: './red-white-categories.component.html',
  styleUrls: ['./red-white-categories.component.css']
})
export class RedWhiteCategoriesComponent implements OnInit {


  category:Category;

  constructor() {
    this.category={white:false, red:false};

   }


  ngOnInit() {
  }

  chooseWhite() {
    this.category.white=true;
    this.category.red=false;
  }

  chooseRed() {
    this.category.red=true;
    this.category.white=false;
  }
}
