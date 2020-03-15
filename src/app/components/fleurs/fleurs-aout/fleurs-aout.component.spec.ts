import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleursAoutComponent } from './fleurs-aout.component';

describe('FleursAoutComponent', () => {
  let component: FleursAoutComponent;
  let fixture: ComponentFixture<FleursAoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleursAoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleursAoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
