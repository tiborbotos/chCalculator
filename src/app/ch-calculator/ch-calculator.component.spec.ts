import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChCalculatorComponent } from './ch-calculator.component';

describe('ChCalculatorComponent', () => {
  let component: ChCalculatorComponent;
  let fixture: ComponentFixture<ChCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
