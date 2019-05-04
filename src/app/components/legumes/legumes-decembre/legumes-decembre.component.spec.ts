import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesDecembreComponent } from './legumes-decembre.component';

describe('LegumesDecembreComponent', () => {
  let component: LegumesDecembreComponent;
  let fixture: ComponentFixture<LegumesDecembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesDecembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesDecembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
