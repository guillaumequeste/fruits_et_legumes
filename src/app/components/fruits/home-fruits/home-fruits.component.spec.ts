import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFruitsComponent } from './home-fruits.component';

describe('HomeFruitsComponent', () => {
  let component: HomeFruitsComponent;
  let fixture: ComponentFixture<HomeFruitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFruitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
