import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesNovembreComponent } from './legumes-novembre.component';

describe('LegumesNovembreComponent', () => {
  let component: LegumesNovembreComponent;
  let fixture: ComponentFixture<LegumesNovembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesNovembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesNovembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
