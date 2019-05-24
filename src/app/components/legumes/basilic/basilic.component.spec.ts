import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasilicComponent } from './basilic.component';

describe('BasilicComponent', () => {
  let component: BasilicComponent;
  let fixture: ComponentFixture<BasilicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasilicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasilicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
