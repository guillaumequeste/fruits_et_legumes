import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeriseComponent } from './cerise.component';

describe('CeriseComponent', () => {
  let component: CeriseComponent;
  let fixture: ComponentFixture<CeriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
