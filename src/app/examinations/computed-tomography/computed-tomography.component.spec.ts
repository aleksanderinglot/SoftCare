import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedTomographyComponent } from './computed-tomography.component';

describe('ComputedTomographyComponent', () => {
  let component: ComputedTomographyComponent;
  let fixture: ComponentFixture<ComputedTomographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputedTomographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputedTomographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
