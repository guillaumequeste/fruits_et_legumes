import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsJanvierComponent } from './fruits-janvier.component';

describe('FruitsJanvierComponent', () => {
  let component: FruitsJanvierComponent;
  let fixture: ComponentFixture<FruitsJanvierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsJanvierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsJanvierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
