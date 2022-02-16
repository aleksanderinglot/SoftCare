import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStomatologistComponent } from './second-stomatologist.component';

describe('SecondStomatologistComponent', () => {
  let component: SecondStomatologistComponent;
  let fixture: ComponentFixture<SecondStomatologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondStomatologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondStomatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
