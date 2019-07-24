import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineDataModalComponent } from './wine-data-modal.component';

describe('WineDataModalComponent', () => {
  let component: WineDataModalComponent;
  let fixture: ComponentFixture<WineDataModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineDataModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
