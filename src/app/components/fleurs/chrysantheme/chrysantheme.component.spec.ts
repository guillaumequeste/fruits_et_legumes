import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChrysanthemeComponent } from './chrysantheme.component';

describe('ChrysanthemeComponent', () => {
  let component: ChrysanthemeComponent;
  let fixture: ComponentFixture<ChrysanthemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChrysanthemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChrysanthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
