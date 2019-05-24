import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoivronComponent } from './poivron.component';

describe('PoivronComponent', () => {
  let component: PoivronComponent;
  let fixture: ComponentFixture<PoivronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoivronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoivronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
