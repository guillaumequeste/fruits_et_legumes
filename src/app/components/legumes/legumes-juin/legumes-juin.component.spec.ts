import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesJuinComponent } from './legumes-juin.component';

describe('LegumesJuinComponent', () => {
  let component: LegumesJuinComponent;
  let fixture: ComponentFixture<LegumesJuinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesJuinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesJuinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
