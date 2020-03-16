import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraspediaComponent } from './craspedia.component';

describe('CraspediaComponent', () => {
  let component: CraspediaComponent;
  let fixture: ComponentFixture<CraspediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraspediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraspediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
