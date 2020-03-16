import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BleuetComponent } from './bleuet.component';

describe('BleuetComponent', () => {
  let component: BleuetComponent;
  let fixture: ComponentFixture<BleuetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BleuetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BleuetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
