import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasseltDetailComponent } from './hasselt-detail.component';

describe('HasseltDetailComponent', () => {
  let component: HasseltDetailComponent;
  let fixture: ComponentFixture<HasseltDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasseltDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasseltDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
