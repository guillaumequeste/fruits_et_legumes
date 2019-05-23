import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapreComponent } from './capre.component';

describe('CapreComponent', () => {
  let component: CapreComponent;
  let fixture: ComponentFixture<CapreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
