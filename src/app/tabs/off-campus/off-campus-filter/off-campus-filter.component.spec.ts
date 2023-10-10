import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCampusFilterComponent } from './off-campus-filter.component';

describe('OffCampusFilterComponent', () => {
  let component: OffCampusFilterComponent;
  let fixture: ComponentFixture<OffCampusFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffCampusFilterComponent]
    });
    fixture = TestBed.createComponent(OffCampusFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
