import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsJuilletComponent } from './fruits-juillet.component';

describe('FruitsJuilletComponent', () => {
  let component: FruitsJuilletComponent;
  let fixture: ComponentFixture<FruitsJuilletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsJuilletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsJuilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
