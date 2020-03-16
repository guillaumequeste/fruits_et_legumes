import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenseeComponent } from './pensee.component';

describe('PenseeComponent', () => {
  let component: PenseeComponent;
  let fixture: ComponentFixture<PenseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
