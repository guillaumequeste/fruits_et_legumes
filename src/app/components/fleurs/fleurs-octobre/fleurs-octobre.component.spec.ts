import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleursOctobreComponent } from './fleurs-octobre.component';

describe('FleursOctobreComponent', () => {
  let component: FleursOctobreComponent;
  let fixture: ComponentFixture<FleursOctobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleursOctobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleursOctobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
