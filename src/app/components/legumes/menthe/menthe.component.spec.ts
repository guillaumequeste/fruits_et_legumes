import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentheComponent } from './menthe.component';

describe('MentheComponent', () => {
  let component: MentheComponent;
  let fixture: ComponentFixture<MentheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
