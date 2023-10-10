import { Component } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent {

  showSearch = false

  onShowSearch() {
    this.showSearch = true;
  }

  onShowNavigation() {
    this.showSearch = false;
  }

}
