import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChataigneComponent } from './chataigne.component';

describe('ChataigneComponent', () => {
  let component: ChataigneComponent;
  let fixture: ComponentFixture<ChataigneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChataigneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChataigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
