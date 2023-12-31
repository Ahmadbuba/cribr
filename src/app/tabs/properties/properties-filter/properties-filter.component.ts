import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-properties-filter',
  templateUrl: './properties-filter.component.html',
  styleUrls: ['./properties-filter.component.scss'],
})
export class PropertiesFilterComponent {
  @Output() cancelEvent = new EventEmitter<boolean>();

  onCancel() {
    this.cancelEvent.emit(false);
  }
}
