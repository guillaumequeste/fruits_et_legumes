import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrtilleComponent } from './myrtille.component';

describe('MyrtilleComponent', () => {
  let component: MyrtilleComponent;
  let fixture: ComponentFixture<MyrtilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrtilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrtilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
