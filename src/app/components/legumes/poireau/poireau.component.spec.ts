import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoireauComponent } from './poireau.component';

describe('PoireauComponent', () => {
  let component: PoireauComponent;
  let fixture: ComponentFixture<PoireauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoireauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoireauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
