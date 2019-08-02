import { Component, OnInit, Input } from '@angular/core';
import { WineByAdmin } from 'src/app/interfaces/admin-wine';
import { AdminHttpService } from 'src/app/services/admin-http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'admin-add-product',
    templateUrl: './admin-add-product.component.html',
    styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

    @Input()
    wineByAdmin: WineByAdmin;
    wineId: number;

    constructor(private request: AdminHttpService, private router: Router) {
        this.wineByAdmin = {
            name: '',
            volume: null,
            stock: null,
            price: null,
            salePrice: 0,
            wineTypeId: null,
            wineryId: null,
            alcoholRating: null,
            year: null
        }
    }

    ngOnInit() { }

    addNewWine():void {
        this.request.addNewWine(this.wineByAdmin).then( () => {
            this.router.navigate(['/admin-products']);
        }).catch(()=>{});

    }
}
