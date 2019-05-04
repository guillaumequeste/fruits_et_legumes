import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsAoutComponent } from './fruits-aout.component';

describe('FruitsAoutComponent', () => {
  let component: FruitsAoutComponent;
  let fixture: ComponentFixture<FruitsAoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsAoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsAoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
