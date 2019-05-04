import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsNovembreComponent } from './fruits-novembre.component';

describe('FruitsNovembreComponent', () => {
  let component: FruitsNovembreComponent;
  let fixture: ComponentFixture<FruitsNovembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsNovembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsNovembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
