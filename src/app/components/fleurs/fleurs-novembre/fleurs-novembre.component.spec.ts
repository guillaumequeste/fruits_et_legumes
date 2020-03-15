import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleursNovembreComponent } from './fleurs-novembre.component';

describe('FleursNovembreComponent', () => {
  let component: FleursNovembreComponent;
  let fixture: ComponentFixture<FleursNovembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleursNovembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleursNovembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
