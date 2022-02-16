import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLaryngologistComponent } from './first-laryngologist.component';

describe('FirstLaryngologistComponent', () => {
  let component: FirstLaryngologistComponent;
  let fixture: ComponentFixture<FirstLaryngologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLaryngologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLaryngologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
