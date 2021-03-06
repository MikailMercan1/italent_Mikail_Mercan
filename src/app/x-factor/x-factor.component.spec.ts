import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XFactorComponent } from './x-factor.component';

describe('XFactorComponent', () => {
  let component: XFactorComponent;
  let fixture: ComponentFixture<XFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XFactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
