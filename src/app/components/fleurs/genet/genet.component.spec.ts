import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenetComponent } from './genet.component';

describe('GenetComponent', () => {
  let component: GenetComponent;
  let fixture: ComponentFixture<GenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
