import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleBasket } from './apple-basket';

describe('AppleBasket', () => {
  let component: AppleBasket;
  let fixture: ComponentFixture<AppleBasket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleBasket],
    }).compileComponents();

    fixture = TestBed.createComponent(AppleBasket);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
