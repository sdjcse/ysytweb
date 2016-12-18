import { listingData } from './mock-listing-data';
import { Injectable } from '@angular/core';

@Injectable()
export class ListingService {
  
  getListData(): Promise<any> {
    return Promise.resolve(listingData);
  }
}