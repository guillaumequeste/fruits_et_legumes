import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsterComponent } from './aster.component';

describe('AsterComponent', () => {
  let component: AsterComponent;
  let fixture: ComponentFixture<AsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
