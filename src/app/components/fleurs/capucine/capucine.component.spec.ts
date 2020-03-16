import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapucineComponent } from './capucine.component';

describe('CapucineComponent', () => {
  let component: CapucineComponent;
  let fixture: ComponentFixture<CapucineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapucineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapucineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
