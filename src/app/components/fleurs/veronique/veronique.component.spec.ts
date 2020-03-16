import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeroniqueComponent } from './veronique.component';

describe('VeroniqueComponent', () => {
  let component: VeroniqueComponent;
  let fixture: ComponentFixture<VeroniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeroniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeroniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
