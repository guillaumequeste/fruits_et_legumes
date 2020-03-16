import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarcisseComponent } from './narcisse.component';

describe('NarcisseComponent', () => {
  let component: NarcisseComponent;
  let fixture: ComponentFixture<NarcisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarcisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarcisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
