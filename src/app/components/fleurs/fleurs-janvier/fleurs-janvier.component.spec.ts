import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleursJanvierComponent } from './fleurs-janvier.component';

describe('FleursJanvierComponent', () => {
  let component: FleursJanvierComponent;
  let fixture: ComponentFixture<FleursJanvierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleursJanvierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleursJanvierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
