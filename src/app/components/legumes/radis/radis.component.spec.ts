import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadisComponent } from './radis.component';

describe('RadisComponent', () => {
  let component: RadisComponent;
  let fixture: ComponentFixture<RadisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
