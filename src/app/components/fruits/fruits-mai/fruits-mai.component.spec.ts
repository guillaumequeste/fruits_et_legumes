import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsMaiComponent } from './fruits-mai.component';

describe('FruitsMaiComponent', () => {
  let component: FruitsMaiComponent;
  let fixture: ComponentFixture<FruitsMaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsMaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsMaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
