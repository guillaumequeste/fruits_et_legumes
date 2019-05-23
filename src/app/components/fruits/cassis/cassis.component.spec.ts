import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CassisComponent } from './cassis.component';

describe('CassisComponent', () => {
  let component: CassisComponent;
  let fixture: ComponentFixture<CassisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CassisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CassisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
