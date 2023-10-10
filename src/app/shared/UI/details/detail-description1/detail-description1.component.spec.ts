import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDescription1Component } from './detail-description1.component';

describe('DetailDescription1Component', () => {
  let component: DetailDescription1Component;
  let fixture: ComponentFixture<DetailDescription1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailDescription1Component]
    });
    fixture = TestBed.createComponent(DetailDescription1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
