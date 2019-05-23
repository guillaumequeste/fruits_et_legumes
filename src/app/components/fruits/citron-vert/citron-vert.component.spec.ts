import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitronVertComponent } from './citron-vert.component';

describe('CitronVertComponent', () => {
  let component: CitronVertComponent;
  let fixture: ComponentFixture<CitronVertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitronVertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitronVertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
