import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoentgenComponent } from './roentgen.component';

describe('RoentgenComponent', () => {
  let component: RoentgenComponent;
  let fixture: ComponentFixture<RoentgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoentgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoentgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
