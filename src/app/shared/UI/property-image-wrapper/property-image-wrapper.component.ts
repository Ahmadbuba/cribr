import { Component, Input } from '@angular/core';
import { PropertyImage } from '../../models/propertyImage.model';

@Component({
  selector: 'app-property-image-wrapper',
  templateUrl: './property-image-wrapper.component.html',
  styleUrls: ['./property-image-wrapper.component.scss'],
})
export class PropertyImageWrapperComponent {
  @Input() images: PropertyImage[];
  @Input() total: number;
}
