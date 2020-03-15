import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnemoneComponent } from './anemone.component';

describe('AnemoneComponent', () => {
  let component: AnemoneComponent;
  let fixture: ComponentFixture<AnemoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnemoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnemoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
