import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavandeComponent } from './lavande.component';

describe('LavandeComponent', () => {
  let component: LavandeComponent;
  let fixture: ComponentFixture<LavandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
