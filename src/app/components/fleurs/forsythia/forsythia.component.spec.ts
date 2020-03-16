import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForsythiaComponent } from './forsythia.component';

describe('ForsythiaComponent', () => {
  let component: ForsythiaComponent;
  let fixture: ComponentFixture<ForsythiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForsythiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForsythiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
