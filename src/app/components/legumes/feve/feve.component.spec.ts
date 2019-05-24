import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeveComponent } from './feve.component';

describe('FeveComponent', () => {
  let component: FeveComponent;
  let fixture: ComponentFixture<FeveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
