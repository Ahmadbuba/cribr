import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCampusComponent } from './off-campus.component';

describe('OffCampusComponent', () => {
  let component: OffCampusComponent;
  let fixture: ComponentFixture<OffCampusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffCampusComponent]
    });
    fixture = TestBed.createComponent(OffCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
