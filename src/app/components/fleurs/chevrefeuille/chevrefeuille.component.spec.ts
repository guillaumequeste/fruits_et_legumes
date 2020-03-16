import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevrefeuilleComponent } from './chevrefeuille.component';

describe('ChevrefeuilleComponent', () => {
  let component: ChevrefeuilleComponent;
  let fixture: ComponentFixture<ChevrefeuilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChevrefeuilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChevrefeuilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
