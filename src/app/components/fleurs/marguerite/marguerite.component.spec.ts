import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MargueriteComponent } from './marguerite.component';

describe('MargueriteComponent', () => {
  let component: MargueriteComponent;
  let fixture: ComponentFixture<MargueriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MargueriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MargueriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
