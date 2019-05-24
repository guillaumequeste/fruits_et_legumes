import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenouilComponent } from './fenouil.component';

describe('FenouilComponent', () => {
  let component: FenouilComponent;
  let fixture: ComponentFixture<FenouilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenouilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenouilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
