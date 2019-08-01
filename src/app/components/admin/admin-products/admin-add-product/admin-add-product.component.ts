import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WineDetailsHttpService } from 'src/app/services/wine-details-http.service';
import { WineDetails } from 'src/app/interfaces/wine-details';

@Component({
    selector: 'admin-add-product',
    templateUrl: './admin-add-product.component.html',
    styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

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
