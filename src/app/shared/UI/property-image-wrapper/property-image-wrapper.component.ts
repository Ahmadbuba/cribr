import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PropertyImage } from '../../models/propertyImage.model';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-property-image-wrapper',
  templateUrl: './property-image-wrapper.component.html',
  styleUrls: ['./property-image-wrapper.component.scss'],
})
export class PropertyImageWrapperComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild('swiperContainer') element: ElementRef;
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

  @Input() images: PropertyImage[];
  @Input() total: number;
  parameters: {};
  // swiperParams = {
  //   slidesPerView: 1,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 1.5,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //     },
  //   },
  // };

  onSwiperInit(event: any) {
    console.log(event.detail.config);
  }
}
