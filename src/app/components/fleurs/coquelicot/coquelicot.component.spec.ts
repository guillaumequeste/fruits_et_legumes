import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoquelicotComponent } from './coquelicot.component';

describe('CoquelicotComponent', () => {
  let component: CoquelicotComponent;
  let fixture: ComponentFixture<CoquelicotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoquelicotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoquelicotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
