import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStomatologistComponent } from './first-stomatologist.component';

describe('FirstStomatologistComponent', () => {
  let component: FirstStomatologistComponent;
  let fixture: ComponentFixture<FirstStomatologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStomatologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStomatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
