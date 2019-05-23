import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchaloteComponent } from './echalote.component';

describe('EchaloteComponent', () => {
  let component: EchaloteComponent;
  let fixture: ComponentFixture<EchaloteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchaloteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchaloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
