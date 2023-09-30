import { Directive, ElementRef, Input } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[swiperElement]',
})
export class SwiperDirective {
  private readonly swiperElement: HTMLElement;
  @Input('config')
  config?: SwiperOptions;

  constructor(private element: ElementRef<HTMLElement>) {
    this.swiperElement = element.nativeElement;
  }

  ngAfterViewInit(): void {
    Object.assign(this.element.nativeElement, this.config);
    //@ts-ignore - We ignore this because there is no initialize method on the HTMLElement
    this.element.nativeElement.initialize();
  }
}
