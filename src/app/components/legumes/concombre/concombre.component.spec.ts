import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcombreComponent } from './concombre.component';

describe('ConcombreComponent', () => {
  let component: ConcombreComponent;
  let fixture: ComponentFixture<ConcombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcombreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
