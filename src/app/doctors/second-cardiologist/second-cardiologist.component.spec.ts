import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCardiologistComponent } from './second-cardiologist.component';

describe('SecondCardiologistComponent', () => {
  let component: SecondCardiologistComponent;
  let fixture: ComponentFixture<SecondCardiologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondCardiologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCardiologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
