import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import {Values} from "../../interfaces/rating-scale";
import {RatingModalService} from "../../services/rating-modal.service";
import {WineCard} from "../../interfaces/wine";
import {CartService} from "../../services/cart.service";
import {CartElement} from "../../interfaces/cart-element";

@Component({
  selector: 'app-rating-modal',
  templateUrl: './rating-modal.component.html',
  styleUrls: ['./rating-modal.component.css'],
  animations: [
      trigger('backdropFade', [
          state('in', style({
              opacity: 1
          })),
          transition('void => *', [ // fade-in animation
              style({ // initial style, before added to the DOM
                  opacity: 0
              }),
              animate(300)
          ]),
          transition('* => void', [ // fade-out animation
              animate(300, style({
                  opacity: 0,
              }))
          ])
      ]),
      trigger('modalSlide', [
          state('in', style({
              opacity: 1,
              transform: 'translateY(0)'
          })),
          transition('void => *', [ // slide-in animation
              animate(400, keyframes([
                  style({
                      transform: 'translateY(-500px) scale(0.3)',
                      opacity: 0,
                      offset: 0 // offset means the fraction of time of the whole animation time
                  }),
                  style({
                      transform: 'translateY(200px) scale(0.65)',
                      opacity: 0.2,
                      offset: 0.6
                  }),
                  style({
                      transform: 'translateY(0) scale(1)',
                      opacity: 1,
                      offset: 1
                  })
              ]))
          ]),
          transition('* => void', [ // slide-out animation
              animate(300, style({
                  opacity: 0,
                  transform: 'translateY(-500px)'
              }))
          ])
      ])
  ]
})
export class RatingModalComponent implements OnInit {


  public values:Values[];
  constructor(public modalService:RatingModalService, public cartService:CartService) {
    this.values=Object.values(Values);
   }

  ngOnInit() {
  }

  setFlagToFalse():void{
    this.modalService.isModalOpen=false;
  }

  print():void{
    console.log(this.cartService.addedProduct[0].quantity);
  }



}
