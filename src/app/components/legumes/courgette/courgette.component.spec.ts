import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourgetteComponent } from './courgette.component';

describe('CourgetteComponent', () => {
  let component: CourgetteComponent;
  let fixture: ComponentFixture<CourgetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourgetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourgetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
