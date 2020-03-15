import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleursMaiComponent } from './fleurs-mai.component';

describe('FleursMaiComponent', () => {
  let component: FleursMaiComponent;
  let fixture: ComponentFixture<FleursMaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleursMaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleursMaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
