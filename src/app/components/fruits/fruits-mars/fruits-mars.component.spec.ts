import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsMarsComponent } from './fruits-mars.component';

describe('FruitsMarsComponent', () => {
  let component: FruitsMarsComponent;
  let fixture: ComponentFixture<FruitsMarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsMarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsMarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
