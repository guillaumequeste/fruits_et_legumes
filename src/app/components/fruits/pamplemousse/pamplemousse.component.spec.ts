import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PamplemousseComponent } from './pamplemousse.component';

describe('PamplemousseComponent', () => {
  let component: PamplemousseComponent;
  let fixture: ComponentFixture<PamplemousseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PamplemousseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PamplemousseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
