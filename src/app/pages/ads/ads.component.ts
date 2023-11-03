import { Component } from '@angular/core';
import { Property } from 'src/app/shared/models/property.model';
import { OffCampusService } from 'src/app/tabs/off-campus/off-campus.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent {
  allProperties: Property[];

  constructor(private offCampusService: OffCampusService) {}

  ngOnInit() {
    this.offCampusService.getAllProperties().subscribe((res) => {
      this.allProperties = res.results.slice();
      console.log(this.allProperties);
    });
  }
}
