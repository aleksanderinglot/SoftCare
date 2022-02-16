import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondOphthalmologistComponent } from './second-ophthalmologist.component';

describe('SecondOphthalmologistComponent', () => {
  let component: SecondOphthalmologistComponent;
  let fixture: ComponentFixture<SecondOphthalmologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondOphthalmologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondOphthalmologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
