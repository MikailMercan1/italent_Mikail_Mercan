import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintTruidenDetailComponent } from './sint-truiden-detail.component';

describe('SintTruidenDetailComponent', () => {
  let component: SintTruidenDetailComponent;
  let fixture: ComponentFixture<SintTruidenDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SintTruidenDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SintTruidenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
