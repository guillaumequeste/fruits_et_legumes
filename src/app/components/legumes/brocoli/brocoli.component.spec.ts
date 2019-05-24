import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrocoliComponent } from './brocoli.component';

describe('BrocoliComponent', () => {
  let component: BrocoliComponent;
  let fixture: ComponentFixture<BrocoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrocoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrocoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
