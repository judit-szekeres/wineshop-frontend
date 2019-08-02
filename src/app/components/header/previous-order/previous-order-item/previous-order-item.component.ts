import { Component, OnInit, Input } from '@angular/core';
import {ItemDetails} from '../../../../interfaces/orders';
import {RatingModalService} from "../../../../services/rating-modal.service";

@Component({
  selector: '[app-previous-order-item]',
  templateUrl: './previous-order-item.component.html',
  styleUrls: ['./previous-order-item.component.css']
})
export class PreviousOrderItemComponent implements OnInit {

public modalFlag:boolean
  @Input()
  item:ItemDetails;

  constructor(public modalService:RatingModalService) {
  this.modalFlag=false }

  ngOnInit() {
  }

  setFlag():void{
    this.modalService.isModalOpen==true;
    this.modalFlag=true;



  }

  closeModal():void{
    this.modalFlag=false;
    console.log("teszt2")
  }

}
