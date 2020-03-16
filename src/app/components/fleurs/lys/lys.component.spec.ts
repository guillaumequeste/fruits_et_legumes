import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LysComponent } from './lys.component';

describe('LysComponent', () => {
  let component: LysComponent;
  let fixture: ComponentFixture<LysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
