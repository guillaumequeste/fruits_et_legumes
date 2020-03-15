import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchideeComponent } from './orchidee.component';

describe('OrchideeComponent', () => {
  let component: OrchideeComponent;
  let fixture: ComponentFixture<OrchideeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrchideeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrchideeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
