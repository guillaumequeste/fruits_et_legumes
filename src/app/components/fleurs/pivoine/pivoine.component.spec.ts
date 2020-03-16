import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivoineComponent } from './pivoine.component';

describe('PivoineComponent', () => {
  let component: PivoineComponent;
  let fixture: ComponentFixture<PivoineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivoineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivoineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
