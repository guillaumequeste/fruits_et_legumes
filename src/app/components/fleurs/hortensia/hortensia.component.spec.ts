import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HortensiaComponent } from './hortensia.component';

describe('HortensiaComponent', () => {
  let component: HortensiaComponent;
  let fixture: ComponentFixture<HortensiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HortensiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HortensiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
