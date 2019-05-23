import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarronComponent } from './marron.component';

describe('MarronComponent', () => {
  let component: MarronComponent;
  let fixture: ComponentFixture<MarronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
