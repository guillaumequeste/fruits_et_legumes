import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandarineComponent } from './mandarine.component';

describe('MandarineComponent', () => {
  let component: MandarineComponent;
  let fixture: ComponentFixture<MandarineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandarineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
