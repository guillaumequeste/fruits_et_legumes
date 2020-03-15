import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MimosaComponent } from './mimosa.component';

describe('MimosaComponent', () => {
  let component: MimosaComponent;
  let fixture: ComponentFixture<MimosaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MimosaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MimosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
