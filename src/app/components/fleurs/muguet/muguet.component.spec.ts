import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuguetComponent } from './muguet.component';

describe('MuguetComponent', () => {
  let component: MuguetComponent;
  let fixture: ComponentFixture<MuguetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuguetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuguetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
