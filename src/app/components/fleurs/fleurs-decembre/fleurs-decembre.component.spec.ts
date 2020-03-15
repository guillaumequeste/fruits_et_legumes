import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleursDecembreComponent } from './fleurs-decembre.component';

describe('FleursDecembreComponent', () => {
  let component: FleursDecembreComponent;
  let fixture: ComponentFixture<FleursDecembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleursDecembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleursDecembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
