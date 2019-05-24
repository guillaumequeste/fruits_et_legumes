import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavetComponent } from './navet.component';

describe('NavetComponent', () => {
  let component: NavetComponent;
  let fixture: ComponentFixture<NavetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
