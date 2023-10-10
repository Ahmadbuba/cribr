import { Component, OnInit } from '@angular/core';
import { AuctionService } from './auctions.service';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss'],
})
export class AuctionsComponent implements OnInit {
  constructor(private auctionService: AuctionService) {}

  ngOnInit() {
    this.auctionService.getAllAuctions().subscribe((res) => console.log(res));
  }
}
