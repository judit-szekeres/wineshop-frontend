import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTableComponent } from './cart-table.component';

describe('TableComponent', () => {
  let component: CartTableComponent;
  let fixture: ComponentFixture<CartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
