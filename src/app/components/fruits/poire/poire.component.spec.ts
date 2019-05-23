import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoireComponent } from './poire.component';

describe('PoireComponent', () => {
  let component: PoireComponent;
  let fixture: ComponentFixture<PoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
