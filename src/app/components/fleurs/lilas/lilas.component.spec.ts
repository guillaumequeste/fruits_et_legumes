import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LilasComponent } from './lilas.component';

describe('LilasComponent', () => {
  let component: LilasComponent;
  let fixture: ComponentFixture<LilasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LilasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LilasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
