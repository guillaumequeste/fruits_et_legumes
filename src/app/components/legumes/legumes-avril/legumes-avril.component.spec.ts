import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesAvrilComponent } from './legumes-avril.component';

describe('LegumesAvrilComponent', () => {
  let component: LegumesAvrilComponent;
  let fixture: ComponentFixture<LegumesAvrilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesAvrilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesAvrilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
