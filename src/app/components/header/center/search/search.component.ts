import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {


  @Output() show = new EventEmitter<boolean>();

  onHideSearch() {
    this.show.emit(true);
  }
}
