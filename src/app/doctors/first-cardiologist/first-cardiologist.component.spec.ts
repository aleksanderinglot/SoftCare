import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCardiologistComponent } from './first-cardiologist.component';

describe('FirstCardiologistComponent', () => {
  let component: FirstCardiologistComponent;
  let fixture: ComponentFixture<FirstCardiologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCardiologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCardiologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
