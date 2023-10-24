import { Component, Input } from '@angular/core';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
  @Input() show: boolean = false;
  @Input() data: Property[] = [];
  n = 1;
  p = 3;
}
