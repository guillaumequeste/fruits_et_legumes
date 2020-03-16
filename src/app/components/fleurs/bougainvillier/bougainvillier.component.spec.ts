import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BougainvillierComponent } from './bougainvillier.component';

describe('BougainvillierComponent', () => {
  let component: BougainvillierComponent;
  let fixture: ComponentFixture<BougainvillierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BougainvillierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BougainvillierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
