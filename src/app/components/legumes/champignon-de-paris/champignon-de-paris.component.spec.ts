import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampignonDeParisComponent } from './champignon-de-paris.component';

describe('ChampignonDeParisComponent', () => {
  let component: ChampignonDeParisComponent;
  let fixture: ComponentFixture<ChampignonDeParisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampignonDeParisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampignonDeParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
