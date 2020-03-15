import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleursJuilletComponent } from './fleurs-juillet.component';

describe('FleursJuilletComponent', () => {
  let component: FleursJuilletComponent;
  let fixture: ComponentFixture<FleursJuilletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleursJuilletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleursJuilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
