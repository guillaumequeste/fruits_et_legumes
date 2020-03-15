import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleursMarsComponent } from './fleurs-mars.component';

describe('FleursMarsComponent', () => {
  let component: FleursMarsComponent;
  let fixture: ComponentFixture<FleursMarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleursMarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleursMarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
