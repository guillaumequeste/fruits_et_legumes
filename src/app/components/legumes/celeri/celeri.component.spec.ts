import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeleriComponent } from './celeri.component';

describe('CeleriComponent', () => {
  let component: CeleriComponent;
  let fixture: ComponentFixture<CeleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
