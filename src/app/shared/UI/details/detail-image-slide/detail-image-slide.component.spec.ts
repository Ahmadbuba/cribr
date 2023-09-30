import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailImageSlideComponent } from './detail-image-slide.component';

describe('DetailImageSlideComponent', () => {
  let component: DetailImageSlideComponent;
  let fixture: ComponentFixture<DetailImageSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailImageSlideComponent]
    });
    fixture = TestBed.createComponent(DetailImageSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
