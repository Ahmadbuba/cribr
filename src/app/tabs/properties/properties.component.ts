import { Component } from '@angular/core';
import { Property } from '../../shared/models/property.model';
import { PropertiesService } from './properties.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent {
  filter = true;
  show = false;
  defaultPage = 1;

  hideFilters() {
    this.filter = false;
  }

  showFilters() {
    this.filter = true;
  }

  allProperties: Property[];

  constructor(private propertyService: PropertiesService) {}

  ngOnInit() {
    this.propertyService.getAllProperties().subscribe((res) => {
      this.allProperties = res.results.slice();
      console.log(this.allProperties);
    });
  }
}
