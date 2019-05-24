import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtichautComponent } from './artichaut.component';

describe('ArtichautComponent', () => {
  let component: ArtichautComponent;
  let fixture: ComponentFixture<ArtichautComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtichautComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtichautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
