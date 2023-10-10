import { Component, Input, OnInit } from '@angular/core';
import { PropertyImage } from 'src/app/shared/models/propertyImage.model';

@Component({
  selector: 'app-detail-image-grid',
  templateUrl: './detail-image-grid.component.html',
  styleUrls: ['./detail-image-grid.component.scss'],
})
export class DetailImageGridComponent implements OnInit {
  @Input() images: PropertyImage[];
  @Input() total: number;
  subImages: PropertyImage[];

  ngOnInit() {
    this.subImages = this.images.slice(2);
  }
}
