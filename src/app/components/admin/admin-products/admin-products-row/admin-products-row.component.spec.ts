import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsRowComponent } from './admin-products-row.component';

describe('AdminProductsRowComponent', () => {
  let component: AdminProductsRowComponent;
  let fixture: ComponentFixture<AdminProductsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
