import { Component, OnInit, Input } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';


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
