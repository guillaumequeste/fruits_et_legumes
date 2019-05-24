import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitPoisComponent } from './petit-pois.component';

describe('PetitPoisComponent', () => {
  let component: PetitPoisComponent;
  let fixture: ComponentFixture<PetitPoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitPoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitPoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
