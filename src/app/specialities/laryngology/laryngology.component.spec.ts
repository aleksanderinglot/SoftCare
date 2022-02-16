import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaryngologyComponent } from './laryngology.component';

describe('LaryngologyComponent', () => {
  let component: LaryngologyComponent;
  let fixture: ComponentFixture<LaryngologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaryngologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaryngologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
