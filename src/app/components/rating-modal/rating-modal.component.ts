import { Component, OnInit, Input } from '@angular/core';
import {Values} from "../../interfaces/rating-scale";
import {RatingModalService} from "../../services/rating-modal.service";
import {RatingHttpService} from "../../services/rating-http.service";
import {ItemDetails} from "../../interfaces/orders";

@Component({
  selector: 'app-rating-modal',
  templateUrl: './rating-modal.component.html',
  styleUrls: ['./rating-modal.component.css'],
})
export class RatingModalComponent implements OnInit {

  @Input()
  productId:number;
  productRating:number;
  public values:Values[];
  constructor(public modalService:RatingModalService,
    public ratingConnectionService:RatingHttpService,

  ) {
    this.productRating=0;
   }

  ngOnInit() {
    console.log(this.productId);
  }

  setFlagToFalse():void{
    this.modalService.isModalOpen=false;
  }



  sendResponse(){
    this.ratingConnectionService.sendProductRating(this.productRating, this.productId).then(() => {
      this.setFlagToFalse();
    });

  }



}
