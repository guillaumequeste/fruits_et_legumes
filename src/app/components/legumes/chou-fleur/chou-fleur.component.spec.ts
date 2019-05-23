import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChouFleurComponent } from './chou-fleur.component';

describe('ChouFleurComponent', () => {
  let component: ChouFleurComponent;
  let fixture: ComponentFixture<ChouFleurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChouFleurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChouFleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
