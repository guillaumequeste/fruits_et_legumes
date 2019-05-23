import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChouComponent } from './chou.component';

describe('ChouComponent', () => {
  let component: ChouComponent;
  let fixture: ComponentFixture<ChouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
