import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpinardComponent } from './epinard.component';

describe('EpinardComponent', () => {
  let component: EpinardComponent;
  let fixture: ComponentFixture<EpinardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpinardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpinardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
