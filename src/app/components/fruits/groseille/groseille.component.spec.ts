import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroseilleComponent } from './groseille.component';

describe('GroseilleComponent', () => {
  let component: GroseilleComponent;
  let fixture: ComponentFixture<GroseilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroseilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroseilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
