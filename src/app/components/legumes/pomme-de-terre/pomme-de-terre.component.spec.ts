import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PommeDeTerreComponent } from './pomme-de-terre.component';

describe('PommeDeTerreComponent', () => {
  let component: PommeDeTerreComponent;
  let fixture: ComponentFixture<PommeDeTerreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PommeDeTerreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PommeDeTerreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
