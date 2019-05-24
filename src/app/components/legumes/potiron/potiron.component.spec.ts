import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotironComponent } from './potiron.component';

describe('PotironComponent', () => {
  let component: PotironComponent;
  let fixture: ComponentFixture<PotironComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotironComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotironComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
