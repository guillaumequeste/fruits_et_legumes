import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreesiaComponent } from './freesia.component';

describe('FreesiaComponent', () => {
  let component: FreesiaComponent;
  let fixture: ComponentFixture<FreesiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreesiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
