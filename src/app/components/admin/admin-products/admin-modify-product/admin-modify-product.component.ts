import { Component, OnInit, Input } from '@angular/core';
import { WineDetailsHttpService } from 'src/app/services/wine-details-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WineByAdmin } from 'src/app/interfaces/admin-wine';
import { WineCard } from 'src/app/interfaces/wine';
import { AdminHttpService } from 'src/app/services/admin-http.service';

@Component({
    selector: 'admin-modify-product',
    templateUrl: './admin-modify-product.component.html',
    styleUrls: ['./admin-modify-product.component.css']
})
export class AdminModifyProductComponent implements OnInit {

    @Input()
    wineByAdmin: WineByAdmin;
    wineId: number;
    wineCard: WineCard;

    wineImage : string;

    constructor(private router: Router, private route: ActivatedRoute, private wineDetailsHttpService: WineDetailsHttpService, private request: AdminHttpService) {
        this.wineId = + this.route.snapshot.paramMap.get("id");
    //    this.wineDetails.img = "";
        this.wineByAdmin = {
            name: '',
            volume: null,
            stock: null,
            price: null,
            salePrice: 0,
            wineTypeId: null,
            wineryId: null,
            alcoholRating: null,
            year: null,
        }
        this.wineImage = "";
    }

    ngOnInit() {
        this.wineDetailsHttpService.getWine(this.wineId).then(wineDetails => {
            console.log(wineDetails);
            this.wineByAdmin.name = wineDetails.name;
            this.wineByAdmin.stock = wineDetails.stock;
            this.wineByAdmin.volume = wineDetails.volume;
            this.wineByAdmin.price = wineDetails.price;
            this.wineByAdmin.salePrice = wineDetails.salePrice;
            this.wineByAdmin.wineTypeId = wineDetails.wineType.id;
            this.wineByAdmin.wineryId = wineDetails.winery.id;
            this.wineByAdmin.alcoholRating = wineDetails.alcoholRating;
            this.wineByAdmin.year = wineDetails.year;
            this.wineImage= wineDetails.img;
            this.wineId = wineDetails.id;
        })
        if(this.wineByAdmin.salePrice === -1){
            this.wineByAdmin.salePrice = 0;
        }
    }

    modifyWine():void {
        this.request.modifyWine(this.wineByAdmin, this.wineId)
            .then(() => {
                this.router.navigate(['/']);
                this.router.navigate(['/admin-modify-product/'+this.wineId]);
            }).catch(() => {});
    }

}
