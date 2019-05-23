import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirabelleComponent } from './mirabelle.component';

describe('MirabelleComponent', () => {
  let component: MirabelleComponent;
  let fixture: ComponentFixture<MirabelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirabelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirabelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
