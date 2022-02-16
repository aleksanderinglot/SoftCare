import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorRegistrationServiceComponent } from '../doctor-registration.service';

interface Terminy {
  dzien: string[];
  godziny: string[];
}

@Component({
  selector: 'app-ear-second-registration',
  templateUrl: './ear-second-registration.component.html',
  styleUrls: ['./ear-second-registration.component.css']
})
export class EarSecondRegistrationComponent implements OnInit {

  terminy: Terminy[];
  isSubmitted = false;

  constructor(private http: HttpClient, private doctorService: DoctorRegistrationServiceComponent) { }

  ngOnInit(): void {
    this.http.get<Terminy[]>('../../assets/earsecond.json').subscribe(data => this.terminy = data, err => console.log('błąd'));
  }

  onSubmit(form: NgForm) {
    const wizyta = {"nazwa": "Dr Ear Second", "imie": form.value.imie, "nazwisko": form.value.nazwisko, "dzien": form.value.dzien, "godzina": form.value.godzina}
    this.doctorService.emitValue(wizyta);
    this.isSubmitted = true;
    form.reset();
  }

}
