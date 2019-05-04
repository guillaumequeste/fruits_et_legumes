import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLegumesComponent } from './home-legumes.component';

describe('HomeLegumesComponent', () => {
  let component: HomeLegumesComponent;
  let fixture: ComponentFixture<HomeLegumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLegumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLegumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
