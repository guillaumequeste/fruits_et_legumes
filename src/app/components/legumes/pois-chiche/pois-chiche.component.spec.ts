import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoisChicheComponent } from './pois-chiche.component';

describe('PoisChicheComponent', () => {
  let component: PoisChicheComponent;
  let fixture: ComponentFixture<PoisChicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoisChicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoisChicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
