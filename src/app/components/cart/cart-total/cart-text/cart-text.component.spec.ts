import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTextComponent } from './cart-text.component';

describe('CartTextComponent', () => {
  let component: CartTextComponent;
  let fixture: ComponentFixture<CartTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
