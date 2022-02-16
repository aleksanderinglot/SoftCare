import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { LoggingComponent } from './logging/logging.component';
import { AsideComponent } from './aside/aside.component';
import { AsideDirective } from './aside/aside.directive';
import { FormsModule } from '@angular/forms';
import { LoggingService } from './logging/logging.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner.component';
import { DescriptionComponent } from './description/description.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { RegistrationDoctorComponent } from './registration-doctor/registration-doctor.component';
import { RegistrationImagingComponent } from './registration-imaging/registration-imaging.component';
import { ContactComponent } from './contact/contact.component';
import { CardiologyComponent } from './specialities/cardiology/cardiology.component';
import { LaryngologyComponent } from './specialities/laryngology/laryngology.component';
import { StomatologyComponent } from './specialities/stomatology/stomatology.component';
import { NeurologyComponent } from './specialities/neurology/neurology.component';
import { OphthalmologyComponent } from './specialities/ophthalmology/ophthalmology.component';
import { FirstCardiologistComponent } from './doctors/first-cardiologist/first-cardiologist.component';
import { SecondCardiologistComponent } from './doctors/second-cardiologist/second-cardiologist.component';
import { FirstLaryngologistComponent } from './doctors/first-laryngologist/first-laryngologist.component';
import { SecondLaryngologistComponent } from './doctors/second-laryngologist/second-laryngologist.component';
import { FirstStomatologistComponent } from './doctors/first-stomatologist/first-stomatologist.component';
import { SecondStomatologistComponent } from './doctors/second-stomatologist/second-stomatologist.component';
import { FirstNeurologistComponent } from './doctors/first-neurologist/first-neurologist.component';
import { SecondNeurologistComponent } from './doctors/second-neurologist/second-neurologist.component';
import { FirstOphthalmologistComponent } from './doctors/first-ophthalmologist/first-ophthalmologist.component';
import { SecondOphthalmologistComponent } from './doctors/second-ophthalmologist/second-ophthalmologist.component';
import { RoentgenComponent } from './examinations/roentgen/roentgen.component';
import { ComputedTomographyComponent } from './examinations/computed-tomography/computed-tomography.component';
import { MagneticResonanceImagingComponent } from './examinations/magnetic-resonance-imaging/magnetic-resonance-imaging.component';
import { RoentgenRegistrationComponent } from './registration-imaging/roentgen-registration/roentgen-registration.component';
import { CtRegistrationComponent } from './registration-imaging/ct-registration/ct-registration.component';
import { MriRegistrationComponent } from './registration-imaging/mri-registration/mri-registration.component';
import { MedicalAppointmentsComponent } from './medical-appointments/medical-appointments.component';
import { ExaminationAppointmentsComponent } from './examination-appointments/examination-appointments.component';
import { ExaminationRegistrationServiceComponent } from './registration-imaging/examination-registration.service';
import { DoctorRegistrationServiceComponent } from './registration-doctor/doctor-registration.service';
import { HeartFirstRegistrationComponent } from './registration-doctor/heart-first-registration/heart-first-registration.component';
import { HeartSecondRegistrationComponent } from './registration-doctor/heart-second-registration/heart-second-registration.component';
import { EarFirstRegistrationComponent } from './registration-doctor/ear-first-registration/ear-first-registration.component';
import { EarSecondRegistrationComponent } from './registration-doctor/ear-second-registration/ear-second-registration.component';
import { BrainFirstRegistrationComponent } from './registration-doctor/brain-first-registration/brain-first-registration.component';
import { BrainSecondRegistrationComponent } from './registration-doctor/brain-second-registration/brain-second-registration.component';
import { EyeFirstRegistrationComponent } from './registration-doctor/eye-first-registration/eye-first-registration.component';
import { EyeSecondRegistrationComponent } from './registration-doctor/eye-second-registration/eye-second-registration.component';
import { ToothFirstRegistrationComponent } from './registration-doctor/tooth-first-registration/tooth-first-registration.component';
import { ToothSecondRegistrationComponent } from './registration-doctor/tooth-second-registration/tooth-second-registration.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LoggingComponent,
    AsideComponent,
    LoadingSpinnerComponent,
    DescriptionComponent,
    SpecialitiesComponent,
    DoctorsComponent,
    ExaminationsComponent,
    RegistrationDoctorComponent,
    RegistrationImagingComponent,
    ContactComponent,
    CardiologyComponent,
    LaryngologyComponent,
    StomatologyComponent,
    NeurologyComponent,
    OphthalmologyComponent,
    FirstCardiologistComponent,
    SecondCardiologistComponent,
    FirstLaryngologistComponent,
    SecondLaryngologistComponent,
    FirstStomatologistComponent,
    SecondStomatologistComponent,
    FirstNeurologistComponent,
    SecondNeurologistComponent,
    FirstOphthalmologistComponent,
    SecondOphthalmologistComponent,
    RoentgenComponent,
    ComputedTomographyComponent,
    MagneticResonanceImagingComponent,
    RoentgenRegistrationComponent,
    CtRegistrationComponent,
    MriRegistrationComponent,
    AsideDirective,
    MedicalAppointmentsComponent,
    ExaminationAppointmentsComponent,
    HeartFirstRegistrationComponent,
    HeartSecondRegistrationComponent,
    EarFirstRegistrationComponent,
    EarSecondRegistrationComponent,
    BrainFirstRegistrationComponent,
    BrainSecondRegistrationComponent,
    EyeFirstRegistrationComponent,
    EyeSecondRegistrationComponent,
    ToothFirstRegistrationComponent,
    ToothSecondRegistrationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoggingService,
    ExaminationRegistrationServiceComponent,
    DoctorRegistrationServiceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
