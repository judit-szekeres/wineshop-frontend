import { Component, OnInit, Input } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';
import { FilterSettings, Category } from 'src/app/interfaces/filter-settings';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { ActivatedRoute } from '@angular/router';
import { EmptyFilterSettingsService } from 'src/app/services/empty-filter-settings.service';
import { CartService } from 'src/app/services/cart.service';
import { CartHTTPService } from 'src/app/services/cart-http.service';

@Component({
    selector: '[admin-products-row]',
    templateUrl: './admin-products-row.component.html',
    styleUrls: ['./admin-products-row.component.css']
})
export class AdminProductsRowComponent implements OnInit {
    @Input()
    wineCard: WineCard;

    routerLinkToModify : string;

    constructor() {
        
    }

    ngOnInit() {

    }




}
