import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticResonanceImagingComponent } from './magnetic-resonance-imaging.component';

describe('MagneticResonanceImagingComponent', () => {
  let component: MagneticResonanceImagingComponent;
  let fixture: ComponentFixture<MagneticResonanceImagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticResonanceImagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticResonanceImagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
