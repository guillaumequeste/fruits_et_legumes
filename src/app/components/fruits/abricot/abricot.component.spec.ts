import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbricotComponent } from './abricot.component';

describe('AbricotComponent', () => {
  let component: AbricotComponent;
  let fixture: ComponentFixture<AbricotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbricotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbricotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
