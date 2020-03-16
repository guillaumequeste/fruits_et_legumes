import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnethComponent } from './aneth.component';

describe('AnethComponent', () => {
  let component: AnethComponent;
  let fixture: ComponentFixture<AnethComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnethComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
