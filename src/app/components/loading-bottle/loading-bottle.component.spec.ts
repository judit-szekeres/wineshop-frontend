import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingBottleComponent } from './loading-bottle.component';

describe('LoadingBottleComponent', () => {
  let component: LoadingBottleComponent;
  let fixture: ComponentFixture<LoadingBottleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingBottleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingBottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
