import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsDecembreComponent } from './fruits-decembre.component';

describe('FruitsDecembreComponent', () => {
  let component: FruitsDecembreComponent;
  let fixture: ComponentFixture<FruitsDecembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsDecembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsDecembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
