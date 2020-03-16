import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournesolComponent } from './tournesol.component';

describe('TournesolComponent', () => {
  let component: TournesolComponent;
  let fixture: ComponentFixture<TournesolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournesolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournesolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
