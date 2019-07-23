import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulRegistrationPageComponent } from './successful-registration-page.component';

describe('SuccessfulRegistrationPageComponent', () => {
  let component: SuccessfulRegistrationPageComponent;
  let fixture: ComponentFixture<SuccessfulRegistrationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulRegistrationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
