import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesSeptembreComponent } from './legumes-septembre.component';

describe('LegumesSeptembreComponent', () => {
  let component: LegumesSeptembreComponent;
  let fixture: ComponentFixture<LegumesSeptembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesSeptembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesSeptembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
