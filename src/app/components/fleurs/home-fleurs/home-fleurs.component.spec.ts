import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFleursComponent } from './home-fleurs.component';

describe('HomeFleursComponent', () => {
  let component: HomeFleursComponent;
  let fixture: ComponentFixture<HomeFleursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFleursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFleursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
