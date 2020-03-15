import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenonculeComponent } from './renoncule.component';

describe('RenonculeComponent', () => {
  let component: RenonculeComponent;
  let fixture: ComponentFixture<RenonculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenonculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenonculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
