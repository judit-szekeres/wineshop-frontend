import { Component, OnInit, Input } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';
import { WineDataModalComponent } from '../wine-data-modal/wine-data-modal.component';
import { CartHTTPService } from '../../services/cart-http.service';
import {CartService} from '../../services/cart.service';
import { CartElement } from "../../interfaces/cart-element";

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

    @Input()
    wineCard: WineCard;

    @Input()
    fullWidth: boolean;

    @Input()
    carousel: boolean;

    showSalePrice: boolean;
    private wineModalNeeded: boolean;

    constructor(public service:CartService,public cartConnectionService: CartHTTPService) {
        this.wineModalNeeded = false;
        this.carousel = false;

    }

    ngOnInit() {
        if (this.wineCard.salePrice == -1) {
            this.showSalePrice = false;
        } else {
            this.showSalePrice = true;
        }
    }

    openLoginModal(): void {
        if (!this.carousel) {
            this.wineModalNeeded = true;
        }

    }

    closeLoginModal(): void {
        this.wineModalNeeded = false;
    }

    addToCart(): void {
        this.cartConnectionService.putProductToServerCart(this.wineCard.id).then(() => {
            this.cartConnectionService.getCartElementsFromServer().then(cartElements=>{
              this.service.addedProduct=cartElements;
            });
        });
    }

}
