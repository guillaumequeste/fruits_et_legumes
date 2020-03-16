import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzaleeComponent } from './azalee.component';

describe('AzaleeComponent', () => {
  let component: AzaleeComponent;
  let fixture: ComponentFixture<AzaleeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzaleeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzaleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
