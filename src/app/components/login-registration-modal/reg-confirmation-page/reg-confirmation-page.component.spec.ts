import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegConfirmationPageComponent } from './reg-confirmation-page.component';

describe('RegConfirmationPageComponent', () => {
  let component: RegConfirmationPageComponent;
  let fixture: ComponentFixture<RegConfirmationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegConfirmationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
