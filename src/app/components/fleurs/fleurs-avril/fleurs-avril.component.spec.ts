import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleursAvrilComponent } from './fleurs-avril.component';

describe('FleursAvrilComponent', () => {
  let component: FleursAvrilComponent;
  let fixture: ComponentFixture<FleursAvrilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleursAvrilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleursAvrilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
