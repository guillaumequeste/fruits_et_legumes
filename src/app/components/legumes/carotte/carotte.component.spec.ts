import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarotteComponent } from './carotte.component';

describe('CarotteComponent', () => {
  let component: CarotteComponent;
  let fixture: ComponentFixture<CarotteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarotteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
