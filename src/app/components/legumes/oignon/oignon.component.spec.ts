import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OignonComponent } from './oignon.component';

describe('OignonComponent', () => {
  let component: OignonComponent;
  let fixture: ComponentFixture<OignonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OignonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OignonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
