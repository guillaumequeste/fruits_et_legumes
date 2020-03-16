import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoliaComponent } from './magnolia.component';

describe('MagnoliaComponent', () => {
  let component: MagnoliaComponent;
  let fixture: ComponentFixture<MagnoliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagnoliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagnoliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
