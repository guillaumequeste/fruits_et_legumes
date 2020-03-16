import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerberaComponent } from './gerbera.component';

describe('GerberaComponent', () => {
  let component: GerberaComponent;
  let fixture: ComponentFixture<GerberaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerberaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerberaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
