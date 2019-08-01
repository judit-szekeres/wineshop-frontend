import { Component, OnInit, Input } from '@angular/core';
import { WineDetails } from 'src/app/interfaces/wine-details';
import { WineDetailsHttpService } from 'src/app/services/wine-details-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'admin-modify-product',
    templateUrl: './admin-modify-product.component.html',
    styleUrls: ['./admin-modify-product.component.css']
})
export class AdminModifyProductComponent implements OnInit {

    @Input()
    wineDetails: WineDetails;

    wineId: number;

    constructor(private route: ActivatedRoute, private wineDetailsHttpService: WineDetailsHttpService) {
        this.wineId = + this.route.snapshot.paramMap.get("id");
    }

    ngOnInit() {
        this.wineDetailsHttpService.getWine(this.wineId).then(wineDetails => {
            console.log(wineDetails);
            this.wineDetails = wineDetails;
        })
    }

}
