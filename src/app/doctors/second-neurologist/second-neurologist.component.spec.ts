import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNeurologistComponent } from './second-neurologist.component';

describe('SecondNeurologistComponent', () => {
  let component: SecondNeurologistComponent;
  let fixture: ComponentFixture<SecondNeurologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondNeurologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondNeurologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
