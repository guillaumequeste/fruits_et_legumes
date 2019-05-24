import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CepeComponent } from './cepe.component';

describe('CepeComponent', () => {
  let component: CepeComponent;
  let fixture: ComponentFixture<CepeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
