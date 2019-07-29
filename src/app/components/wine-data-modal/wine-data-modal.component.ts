import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { WineDetails } from 'src/app/interfaces/wine-details';
import { WineDetailsHttpService } from 'src/app/services/wine-details-http.service';
import { CartHTTPService } from 'src/app/services/cart-http.service';

@Component({
    selector: 'wine-data-modal',
    templateUrl: './wine-data-modal.component.html',
    styleUrls: ['./wine-data-modal.component.css'],
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

export class WineDataModalComponent implements OnInit {

    @Input()
    wineDetails: WineDetails;

    @Input()
    wineId: number;

    @Output()
    closeThis = new EventEmitter();

    private haveSpecialPrice: boolean;
    showLoading: boolean;

  constructor(private wineDetailsHttpService: WineDetailsHttpService,public cartConnectionService:CartHTTPService) {
    console.log("teszt");
    console.log(this.wineId);
    this.haveSpecialPrice = true;
    this.showLoading = true
  }

    ngOnInit() {
        this.wineDetailsHttpService.getWine(this.wineId).then(wineDetails => {
            console.log(wineDetails);
            this.wineDetails = wineDetails;
            if (this.wineDetails.salePrice === -1) {
                this.haveSpecialPrice = false;
            }
            this.showLoading = false;
        })
    }
    closeMe() {
        this.closeThis.emit();

    }

  addToCart():void{
    this.cartConnectionService.putProductToServerCart(this.wineId).then(() => {
      console.log("succeeded");

    });
  }


}
