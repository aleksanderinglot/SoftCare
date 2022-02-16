import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DescriptionComponent } from './description/description.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { LoggingComponent } from './logging/logging.component';
import { RegistrationDoctorComponent } from './registration-doctor/registration-doctor.component';
import { RegistrationImagingComponent } from './registration-imaging/registration-imaging.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { CardiologyComponent } from './specialities/cardiology/cardiology.component';
import { LoggingGuard } from './logging/logging.guard'
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

const appRoutes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'description', component: DescriptionComponent },
  {
    path: 'specialities', component: SpecialitiesComponent, children: [
      { path: 'cardiology', component: CardiologyComponent },
      { path: 'laryngology', component: LaryngologyComponent },
      { path: 'stomatology', component: StomatologyComponent },
      { path: 'neurology', component: NeurologyComponent },
      { path: 'ophthalmology', component: OphthalmologyComponent },
    ]
  },
  { path: 'doctors', component: DoctorsComponent, children: [
    { path: 'first-cardiologist', component: FirstCardiologistComponent },
    { path: 'second-cardiologist', component: SecondCardiologistComponent },
    { path: 'first-laryngologist', component: FirstLaryngologistComponent },
    { path: 'second-laryngologist', component: SecondLaryngologistComponent },
    { path: 'first-stomatologist', component: FirstStomatologistComponent },
    { path: 'second-stomatologist', component: SecondStomatologistComponent },
    { path: 'first-neurologist', component: FirstNeurologistComponent },
    { path: 'second-neurologist', component: SecondNeurologistComponent },
    { path: 'first-ophthalmologist', component: FirstOphthalmologistComponent },
    { path: 'second-ophthalmologist', component: SecondOphthalmologistComponent },
  ] },
  { path: 'examinations', component: ExaminationsComponent, children: [
    { path: 'roentgen', component: RoentgenComponent },
    { path: 'computed-tomography', component: ComputedTomographyComponent },
    { path: 'magnetic-resonance-imaging', component: MagneticResonanceImagingComponent },
  ]},
  { path: 'registration-doctor', component: RegistrationDoctorComponent, canActivate: [LoggingGuard], children: [
    { path: 'heart-first-registration', component: HeartFirstRegistrationComponent },
    { path: 'heart-second-registration', component: HeartSecondRegistrationComponent },
    { path: 'ear-first-registration', component: EarFirstRegistrationComponent },
    { path: 'ear-second-registration', component: EarSecondRegistrationComponent },
    { path: 'brain-first-registration', component: BrainFirstRegistrationComponent },
    { path: 'brain-second-registration', component: BrainSecondRegistrationComponent },
    { path: 'eye-first-registration', component: EyeFirstRegistrationComponent },
    { path: 'eye-second-registration', component: EyeSecondRegistrationComponent },
    { path: 'tooth-first-registration', component: ToothFirstRegistrationComponent },
    { path: 'tooth-second-registration', component: ToothSecondRegistrationComponent }
  ] },
  { path: 'registration-imaging', component: RegistrationImagingComponent, canActivate: [LoggingGuard], children: [
    { path: 'roentgen-registration', component: RoentgenRegistrationComponent },
    { path: 'ct-registration', component: CtRegistrationComponent },
    { path: 'mri-registration', component: MriRegistrationComponent }
  ] },
  { path: 'contact', component: ContactComponent },
  { path: 'auth', component: LoggingComponent },
  { path: 'medical-appointments', component: MedicalAppointmentsComponent },
  { path: 'examination-appointments', component: ExaminationAppointmentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
