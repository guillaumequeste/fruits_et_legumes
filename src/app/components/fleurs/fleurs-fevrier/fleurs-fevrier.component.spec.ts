import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleursFevrierComponent } from './fleurs-fevrier.component';

describe('FleursFevrierComponent', () => {
  let component: FleursFevrierComponent;
  let fixture: ComponentFixture<FleursFevrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleursFevrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleursFevrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
