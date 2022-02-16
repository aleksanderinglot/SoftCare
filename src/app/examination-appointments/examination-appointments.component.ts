import { Component, OnInit } from '@angular/core';
import { ExaminationRegistrationServiceComponent } from '../registration-imaging/examination-registration.service';

interface Wizyta {
  nazwa: string;
  imie: string;
  nazwisko: string;
  dzien: string;
  godzina: string;
}

@Component({
  selector: 'app-examination-appointments',
  templateUrl: './examination-appointments.component.html',
  styleUrls: ['./examination-appointments.component.css']
})
export class ExaminationAppointmentsComponent implements OnInit {

  dane: Wizyta;
  wizyty: Wizyta[];

  constructor(private examinationService: ExaminationRegistrationServiceComponent) {

  }

  ngOnInit(): void {
    this.examinationService.subject.subscribe((data) => {
        this.wizyty = data;
      }
    );
  }
  
  onClick(wizyta) {
    const index = this.wizyty.indexOf(wizyta);
    this.wizyty.splice(index, 1);
  }
}
