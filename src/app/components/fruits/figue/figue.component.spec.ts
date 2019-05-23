import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigueComponent } from './figue.component';

describe('FigueComponent', () => {
  let component: FigueComponent;
  let fixture: ComponentFixture<FigueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
