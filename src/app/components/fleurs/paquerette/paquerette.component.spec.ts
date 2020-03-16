import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueretteComponent } from './paquerette.component';

describe('PaqueretteComponent', () => {
  let component: PaqueretteComponent;
  let fixture: ComponentFixture<PaqueretteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaqueretteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueretteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
