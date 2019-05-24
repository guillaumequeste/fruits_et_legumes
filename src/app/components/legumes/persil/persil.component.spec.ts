import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersilComponent } from './persil.component';

describe('PersilComponent', () => {
  let component: PersilComponent;
  let fixture: ComponentFixture<PersilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
