import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoisDeSenteurComponent } from './pois-de-senteur.component';

describe('PoisDeSenteurComponent', () => {
  let component: PoisDeSenteurComponent;
  let fixture: ComponentFixture<PoisDeSenteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoisDeSenteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoisDeSenteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
