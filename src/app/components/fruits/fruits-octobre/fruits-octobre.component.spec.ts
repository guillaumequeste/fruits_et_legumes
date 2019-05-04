import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsOctobreComponent } from './fruits-octobre.component';

describe('FruitsOctobreComponent', () => {
  let component: FruitsOctobreComponent;
  let fixture: ComponentFixture<FruitsOctobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsOctobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsOctobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
