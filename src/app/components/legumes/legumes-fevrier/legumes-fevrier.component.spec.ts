import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesFevrierComponent } from './legumes-fevrier.component';

describe('LegumesFevrierComponent', () => {
  let component: LegumesFevrierComponent;
  let fixture: ComponentFixture<LegumesFevrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesFevrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesFevrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
