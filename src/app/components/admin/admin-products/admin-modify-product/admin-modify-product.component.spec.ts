import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifyProductComponent } from './admin-modify-product.component';

describe('AdminModifyProductComponent', () => {
  let component: AdminModifyProductComponent;
  let fixture: ComponentFixture<AdminModifyProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminModifyProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModifyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
