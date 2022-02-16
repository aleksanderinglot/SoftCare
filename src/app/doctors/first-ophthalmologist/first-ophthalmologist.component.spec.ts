import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstOphthalmologistComponent } from './first-ophthalmologist.component';

describe('FirstOphthalmologistComponent', () => {
  let component: FirstOphthalmologistComponent;
  let fixture: ComponentFixture<FirstOphthalmologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstOphthalmologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstOphthalmologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
