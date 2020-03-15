import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleursJuinComponent } from './fleurs-juin.component';

describe('FleursJuinComponent', () => {
  let component: FleursJuinComponent;
  let fixture: ComponentFixture<FleursJuinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleursJuinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleursJuinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
