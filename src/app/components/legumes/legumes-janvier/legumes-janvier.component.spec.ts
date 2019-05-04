import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesJanvierComponent } from './legumes-janvier.component';

describe('LegumesJanvierComponent', () => {
  let component: LegumesJanvierComponent;
  let fixture: ComponentFixture<LegumesJanvierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesJanvierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesJanvierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
