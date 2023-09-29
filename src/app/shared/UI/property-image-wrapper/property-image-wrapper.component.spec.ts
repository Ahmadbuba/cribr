import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyImageWrapperComponent } from './property-image-wrapper.component';

describe('PropertyImageWrapperComponent', () => {
  let component: PropertyImageWrapperComponent;
  let fixture: ComponentFixture<PropertyImageWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyImageWrapperComponent]
    });
    fixture = TestBed.createComponent(PropertyImageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
