import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndiveComponent } from './endive.component';

describe('EndiveComponent', () => {
  let component: EndiveComponent;
  let fixture: ComponentFixture<EndiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
