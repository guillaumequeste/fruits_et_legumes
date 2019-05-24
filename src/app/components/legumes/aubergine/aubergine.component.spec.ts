import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AubergineComponent } from './aubergine.component';

describe('AubergineComponent', () => {
  let component: AubergineComponent;
  let fixture: ComponentFixture<AubergineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AubergineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AubergineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
