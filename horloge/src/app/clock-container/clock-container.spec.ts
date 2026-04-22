import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockContainer } from './clock-container';

describe('ClockContainer', () => {
  let component: ClockContainer;
  let fixture: ComponentFixture<ClockContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(ClockContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
