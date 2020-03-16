import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChardonComponent } from './chardon.component';

describe('ChardonComponent', () => {
  let component: ChardonComponent;
  let fixture: ComponentFixture<ChardonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChardonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChardonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
