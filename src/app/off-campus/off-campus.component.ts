import { Component, OnInit } from '@angular/core';
import { OffCampusService } from './off-campus.service';
import { Property } from '../shared/models/property.model';

@Component({
  selector: 'app-off-campus',
  templateUrl: './off-campus.component.html',
  styleUrls: ['./off-campus.component.scss'],
})
export class OffCampusComponent implements OnInit {
  defaultPage = 1;

  allProperties: Property[];

  constructor(private offCampusService: OffCampusService) {}

  ngOnInit() {
    this.offCampusService.getAllProperties().subscribe((res) => {
      this.allProperties = res.results.slice();
      console.log(this.allProperties);
    });
  }
}
