import { Component, OnInit } from '@angular/core';
import { DoctorRegistrationServiceComponent } from '../registration-doctor/doctor-registration.service';

interface Wizyta {
  nazwa: string;
  imie: string;
  nazwisko: string;
  dzien: string;
  godzina: string;
}

@Component({
  selector: 'app-medical-appointments',
  templateUrl: './medical-appointments.component.html',
  styleUrls: ['./medical-appointments.component.css']
})
export class MedicalAppointmentsComponent implements OnInit {

  dane: Wizyta;
  wizyty: Wizyta[];

  constructor(private doctorService: DoctorRegistrationServiceComponent) { }

  ngOnInit(): void {
    this.doctorService.subject.subscribe((data) => {
      this.wizyty = data;
    }
  );
  }

  onClick(wizyta) {
    const index = this.wizyty.indexOf(wizyta);
    this.wizyty.splice(index, 1);
  }

}
