import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalReflectionComponent } from './final-reflection.component';

describe('FinalReflectionComponent', () => {
  let component: FinalReflectionComponent;
  let fixture: ComponentFixture<FinalReflectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalReflectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalReflectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
