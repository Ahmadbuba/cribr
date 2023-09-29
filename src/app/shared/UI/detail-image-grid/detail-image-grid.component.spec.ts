import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailImageGridComponent } from './detail-image-grid.component';

describe('DetailImageGridComponent', () => {
  let component: DetailImageGridComponent;
  let fixture: ComponentFixture<DetailImageGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailImageGridComponent]
    });
    fixture = TestBed.createComponent(DetailImageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
