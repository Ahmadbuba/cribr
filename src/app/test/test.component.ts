import { Component } from '@angular/core';
import { Property } from '../shared/models/property.model';
import { PropertiesService } from '../tabs/properties/properties.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  allProperties: Property[];

  constructor(private propertyService: PropertiesService) {}

  ngOnInit() {
    this.propertyService.getAllProperties().subscribe((res) => {
      this.allProperties = res.results.slice();
      console.log(this.allProperties);
      console.log(this.allProperties[0].images);
    });
  }
}
