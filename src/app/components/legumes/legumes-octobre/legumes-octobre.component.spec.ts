import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesOctobreComponent } from './legumes-octobre.component';

describe('LegumesOctobreComponent', () => {
  let component: LegumesOctobreComponent;
  let fixture: ComponentFixture<LegumesOctobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesOctobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesOctobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
