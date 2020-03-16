import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EglantierComponent } from './eglantier.component';

describe('EglantierComponent', () => {
  let component: EglantierComponent;
  let fixture: ComponentFixture<EglantierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EglantierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EglantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
