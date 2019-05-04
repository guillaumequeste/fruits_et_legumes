import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsSeptembreComponent } from './fruits-septembre.component';

describe('FruitsSeptembreComponent', () => {
  let component: FruitsSeptembreComponent;
  let fixture: ComponentFixture<FruitsSeptembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsSeptembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsSeptembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
