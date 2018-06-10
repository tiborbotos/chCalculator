import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RationCalculatorComponent } from './ration-calculator.component';

describe('RationCalculatorComponent', () => {
  let component: RationCalculatorComponent;
  let fixture: ComponentFixture<RationCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RationCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RationCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
