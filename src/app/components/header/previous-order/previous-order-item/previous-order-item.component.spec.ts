import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousOrderItemComponent } from './previous-order-item.component';

describe('PreviousOrderItemComponent', () => {
  let component: PreviousOrderItemComponent;
  let fixture: ComponentFixture<PreviousOrderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousOrderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
