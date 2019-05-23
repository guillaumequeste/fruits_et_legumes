import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramboiseComponent } from './framboise.component';

describe('FramboiseComponent', () => {
  let component: FramboiseComponent;
  let fixture: ComponentFixture<FramboiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramboiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramboiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
