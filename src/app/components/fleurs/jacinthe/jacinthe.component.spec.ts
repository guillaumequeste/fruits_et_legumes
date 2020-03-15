import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JacintheComponent } from './jacinthe.component';

describe('JacintheComponent', () => {
  let component: JacintheComponent;
  let fixture: ComponentFixture<JacintheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JacintheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JacintheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
