import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsFevrierComponent } from './fruits-fevrier.component';

describe('FruitsFevrierComponent', () => {
  let component: FruitsFevrierComponent;
  let fixture: ComponentFixture<FruitsFevrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsFevrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsFevrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
