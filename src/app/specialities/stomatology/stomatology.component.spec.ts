import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StomatologyComponent } from './stomatology.component';

describe('StomatologyComponent', () => {
  let component: StomatologyComponent;
  let fixture: ComponentFixture<StomatologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StomatologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StomatologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
