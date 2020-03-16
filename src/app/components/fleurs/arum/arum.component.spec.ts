import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArumComponent } from './arum.component';

describe('ArumComponent', () => {
  let component: ArumComponent;
  let fixture: ComponentFixture<ArumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
