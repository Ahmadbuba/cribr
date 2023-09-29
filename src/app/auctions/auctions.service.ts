import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuctionService {
  apiUrl = environment.apiUrl + 'auctions/';

  constructor(private http: HttpClient) {}

  getAllAuctions() {
    return this.http.get(this.apiUrl);
  }
}
