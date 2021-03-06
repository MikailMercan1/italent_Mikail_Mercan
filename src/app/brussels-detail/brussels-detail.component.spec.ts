import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrusselsDetailComponent } from './brussels-detail.component';

describe('BrusselsDetailComponent', () => {
  let component: BrusselsDetailComponent;
  let fixture: ComponentFixture<BrusselsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrusselsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrusselsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
