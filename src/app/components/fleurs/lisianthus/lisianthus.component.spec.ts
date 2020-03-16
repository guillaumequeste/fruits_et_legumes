import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisianthusComponent } from './lisianthus.component';

describe('LisianthusComponent', () => {
  let component: LisianthusComponent;
  let fixture: ComponentFixture<LisianthusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisianthusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisianthusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
