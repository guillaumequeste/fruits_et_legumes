import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaricotVertComponent } from './haricot-vert.component';

describe('HaricotVertComponent', () => {
  let component: HaricotVertComponent;
  let fixture: ComponentFixture<HaricotVertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaricotVertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaricotVertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
