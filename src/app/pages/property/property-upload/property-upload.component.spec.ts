import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyUploadComponent } from './property-upload.component';

describe('PropertyUploadComponent', () => {
  let component: PropertyUploadComponent;
  let fixture: ComponentFixture<PropertyUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyUploadComponent]
    });
    fixture = TestBed.createComponent(PropertyUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
