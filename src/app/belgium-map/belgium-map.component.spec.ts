import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelgiumMapComponent } from './belgium-map.component';

describe('BelgiumMapComponent', () => {
  let component: BelgiumMapComponent;
  let fixture: ComponentFixture<BelgiumMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelgiumMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelgiumMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
