import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleursSeptembreComponent } from './fleurs-septembre.component';

describe('FleursSeptembreComponent', () => {
  let component: FleursSeptembreComponent;
  let fixture: ComponentFixture<FleursSeptembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleursSeptembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleursSeptembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
