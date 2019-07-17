import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedWhiteCategoriesComponent } from './red-white-categories.component';

describe('RedWhiteCategoriesComponent', () => {
  let component: RedWhiteCategoriesComponent;
  let fixture: ComponentFixture<RedWhiteCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedWhiteCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedWhiteCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
