import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelonComponent } from './melon.component';

describe('MelonComponent', () => {
  let component: MelonComponent;
  let fixture: ComponentFixture<MelonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
