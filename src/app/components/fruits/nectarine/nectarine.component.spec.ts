import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NectarineComponent } from './nectarine.component';

describe('NectarineComponent', () => {
  let component: NectarineComponent;
  let fixture: ComponentFixture<NectarineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NectarineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NectarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
