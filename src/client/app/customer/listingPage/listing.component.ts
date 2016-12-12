import { Component, ElementRef, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {ListingService} from './listing.service'

declare var $ : any;
@Component({
  moduleId: module.id,
  templateUrl: 'listing.component.html',
  styleUrls: ['assets/css/listing.component.css'],
  providers: [ListingService],

})
export class listingcomponent implements OnInit {
  listingData : Array<any>;
  constructor(
    private listingService: ListingService) {

     }
     state: string ='show';
  
  togglestates(index : any) {
    $('.address'+index).css({
display : "block",
transition : "visibility 0s, opacity 0.5s linear;"
    }
    );
}
 togglestop(index : any) {
    $('.address'+index).css({
      display : "none"
    });
}

closeNav(){
$('#mySidenav').css({
  width : "0px",
  padding: "60px 0px 0px 0px"
})
}

openNav(){
$('#mySidenav').css({
  width : "350px",
  padding: "60px 25px 25px 25px"
})
}

  getListing(): void {
    this.listingService.getListData().then(listingData => this.listingData = listingData);
  }

  ngOnInit(): void {
    this.getListing()
  }
}

