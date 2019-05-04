import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesAoutComponent } from './legumes-aout.component';

describe('LegumesAoutComponent', () => {
  let component: LegumesAoutComponent;
  let fixture: ComponentFixture<LegumesAoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesAoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesAoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
