import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNeurologistComponent } from './first-neurologist.component';

describe('FirstNeurologistComponent', () => {
  let component: FirstNeurologistComponent;
  let fixture: ComponentFixture<FirstNeurologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstNeurologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNeurologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
