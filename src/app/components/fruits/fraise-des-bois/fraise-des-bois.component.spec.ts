import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraiseDesBoisComponent } from './fraise-des-bois.component';

describe('FraiseDesBoisComponent', () => {
  let component: FraiseDesBoisComponent;
  let fixture: ComponentFixture<FraiseDesBoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraiseDesBoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraiseDesBoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
