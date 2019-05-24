import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhubarbeComponent } from './rhubarbe.component';

describe('RhubarbeComponent', () => {
  let component: RhubarbeComponent;
  let fixture: ComponentFixture<RhubarbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhubarbeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhubarbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
