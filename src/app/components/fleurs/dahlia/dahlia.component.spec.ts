import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DahliaComponent } from './dahlia.component';

describe('DahliaComponent', () => {
  let component: DahliaComponent;
  let fixture: ComponentFixture<DahliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DahliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DahliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
