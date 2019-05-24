import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspergeComponent } from './asperge.component';

describe('AspergeComponent', () => {
  let component: AspergeComponent;
  let fixture: ComponentFixture<AspergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
