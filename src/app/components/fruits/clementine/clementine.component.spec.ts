import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClementineComponent } from './clementine.component';

describe('ClementineComponent', () => {
  let component: ClementineComponent;
  let fixture: ComponentFixture<ClementineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClementineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClementineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
