import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlaieulComponent } from './glaieul.component';

describe('GlaieulComponent', () => {
  let component: GlaieulComponent;
  let fixture: ComponentFixture<GlaieulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlaieulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlaieulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
