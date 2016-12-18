import { Component } from '@angular/core';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { ProductGallery } from './product-gallery';

@Component({
  moduleId: module.id,
  templateUrl: 'product-details.component.html',
  styleUrls: [ 'assets/css/product-details.component.css' ],
  providers: [ NgbCarouselConfig ]
})

export class ProductDetailsComponent {
    productGallery: ProductGallery[];
    totalAvailability : number[] = [1,2];
    productCategoryAndAmenities : any[] = [{
        name : 'Living Room',
        slug : 'living-room',
        amenities : [{
            title : 'Sofa',
            iconPath : 'app/shared/imgs/svg/sofa.svg'
        },{
            title : 'Washing machine',
            iconPath : 'app/shared/imgs/svg/washing-machine.svg'
        },{
            title : 'Television',
            iconPath : 'app/shared/imgs/svg/television.svg'
        }]
    },{
        name : 'Kitchen',
        slug : 'kitchen',
        amenities : [{
            title : 'Refrigerator',
            iconPath : 'app/shared/imgs/svg/fridge.svg'
        }, {
            title : 'Stove',
            iconPath : 'app/shared/imgs/svg/stove.svg'
        }, {
            title : 'Dining table',
            iconPath : 'app/shared/imgs/svg/dining-table.svg'
        }]
    },{
        name : 'Bathroom',
        slug : 'bathroom',
        amenities : [{
            title : 'Geyser',
            iconPath : 'app/shared/imgs/svg/water-heater.svg'
        }, {
            title : 'Toilet',
            iconPath : 'app/shared/imgs/svg/toilet.svg'
        }]
    }];
    constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 3000;
        config.wrap = true;
        config.keyboard = true;
    }
    ngOnInit() : void {
        this.productGallery = [{
            title : 'Bedroom',
            description : 'This carousel uses customized default values.',
            url : 'app/customer/product-details/assets/imgs/sample/room-1.jpg'
        },{
            title : 'Living room',
            description : 'This carousel uses customized default values.',
            url : 'app/customer/product-details/assets/imgs/sample/room-2.jpg'
        },{
            title : 'Common room',
            description : 'This carousel uses customized default values.',
            url : 'app/customer/product-details/assets/imgs/sample/room-3.jpg'
        }];
    }
 }
