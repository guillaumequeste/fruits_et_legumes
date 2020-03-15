import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TulipeComponent } from './tulipe.component';

describe('TulipeComponent', () => {
  let component: TulipeComponent;
  let fixture: ComponentFixture<TulipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TulipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TulipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
