import { Component } from '@angular/core';
import { Property } from 'src/app/shared/models/property.model';
import { PropertiesService } from '../properties.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent {
  allProperties: Property[];

  constructor(private propertyService: PropertiesService) {}

  ngOnInit() {
    this.propertyService.getAllProperties().subscribe((res) => {
      this.allProperties = res.results.slice();
      console.log(this.allProperties);
      console.log(this.allProperties[0].images);
    });

    const swiperParams = {
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      on: {
        init() {
          // ...
        },
      },
    };
  }
}
