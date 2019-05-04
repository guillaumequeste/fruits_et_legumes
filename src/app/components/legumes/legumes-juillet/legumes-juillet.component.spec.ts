import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesJuilletComponent } from './legumes-juillet.component';

describe('LegumesJuilletComponent', () => {
  let component: LegumesJuilletComponent;
  let fixture: ComponentFixture<LegumesJuilletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesJuilletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesJuilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
