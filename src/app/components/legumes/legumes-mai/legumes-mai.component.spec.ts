import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesMaiComponent } from './legumes-mai.component';

describe('LegumesMaiComponent', () => {
  let component: LegumesMaiComponent;
  let fixture: ComponentFixture<LegumesMaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesMaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesMaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
