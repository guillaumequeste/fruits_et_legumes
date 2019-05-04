import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsAvrilComponent } from './fruits-avril.component';

describe('FruitsAvrilComponent', () => {
  let component: FruitsAvrilComponent;
  let fixture: ComponentFixture<FruitsAvrilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsAvrilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsAvrilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
