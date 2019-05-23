import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitronJauneComponent } from './citron-jaune.component';

describe('CitronJauneComponent', () => {
  let component: CitronJauneComponent;
  let fixture: ComponentFixture<CitronJauneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitronJauneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitronJauneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
