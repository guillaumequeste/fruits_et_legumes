import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesMarsComponent } from './legumes-mars.component';

describe('LegumesMarsComponent', () => {
  let component: LegumesMarsComponent;
  let fixture: ComponentFixture<LegumesMarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesMarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesMarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
