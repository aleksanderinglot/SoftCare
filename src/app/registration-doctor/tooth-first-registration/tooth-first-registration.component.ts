import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorRegistrationServiceComponent } from '../doctor-registration.service';

interface Terminy {
  dzien: string[];
  godziny: string[];
}

@Component({
  selector: 'app-tooth-first-registration',
  templateUrl: './tooth-first-registration.component.html',
  styleUrls: ['./tooth-first-registration.component.css']
})
export class ToothFirstRegistrationComponent implements OnInit {

  terminy: Terminy[];
  isSubmitted = false;

  constructor(private http: HttpClient, private doctorService: DoctorRegistrationServiceComponent) { }

  ngOnInit(): void {
    this.http.get<Terminy[]>('../../assets/toothfirst.json').subscribe(data => this.terminy = data, err => console.log('błąd'));
  }

  onSubmit(form: NgForm) {
    const wizyta = {"nazwa": "Dr Tooth First", "imie": form.value.imie, "nazwisko": form.value.nazwisko, "dzien": form.value.dzien, "godzina": form.value.godzina}
    this.doctorService.emitValue(wizyta);
    this.isSubmitted = true;
    form.reset();
  }

}
