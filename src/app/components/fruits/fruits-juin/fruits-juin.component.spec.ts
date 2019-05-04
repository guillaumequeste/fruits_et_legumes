import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsJuinComponent } from './fruits-juin.component';

describe('FruitsJuinComponent', () => {
  let component: FruitsJuinComponent;
  let fixture: ComponentFixture<FruitsJuinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsJuinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsJuinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
