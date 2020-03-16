import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuchsiaComponent } from './fuchsia.component';

describe('FuchsiaComponent', () => {
  let component: FuchsiaComponent;
  let fixture: ComponentFixture<FuchsiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuchsiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuchsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
