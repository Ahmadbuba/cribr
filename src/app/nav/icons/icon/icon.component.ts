import { Component, Input } from '@angular/core';
import { Icon } from '../icon.interface';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input("name") icon: Icon;
}
