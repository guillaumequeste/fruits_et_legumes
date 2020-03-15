import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JasminComponent } from './jasmin.component';

describe('JasminComponent', () => {
  let component: JasminComponent;
  let fixture: ComponentFixture<JasminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JasminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JasminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
