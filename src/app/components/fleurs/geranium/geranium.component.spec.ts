import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeraniumComponent } from './geranium.component';

describe('GeraniumComponent', () => {
  let component: GeraniumComponent;
  let fixture: ComponentFixture<GeraniumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeraniumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeraniumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
