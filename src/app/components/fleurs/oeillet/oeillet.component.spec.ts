import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeilletComponent } from './oeillet.component';

describe('OeilletComponent', () => {
  let component: OeilletComponent;
  let fixture: ComponentFixture<OeilletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeilletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
