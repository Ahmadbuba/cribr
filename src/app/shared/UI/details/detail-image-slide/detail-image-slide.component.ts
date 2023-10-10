import { Component, Input, OnInit } from '@angular/core';
import { PropertyImage } from '../../../models/propertyImage.model';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-detail-image-slide',
  templateUrl: './detail-image-slide.component.html',
  styleUrls: ['./detail-image-slide.component.scss'],
})
export class DetailImageSlideComponent implements OnInit {
  @Input() images: PropertyImage[];
  @Input() total: number;

  swiperParams: SwiperOptions = {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // breakpoints: {
    //   640: {
    //     slidesPerView: 1.5,
    //   },
    //   1024: {
    //     slidesPerView: 3,
    //   },
    // },
    on: {
      init() {},
    },
  };

  ngOnInit() {
    console.log(this.images.length);
  }
}
