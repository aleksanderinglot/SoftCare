import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorRegistrationServiceComponent } from '../doctor-registration.service';

interface Terminy {
  dzien: string[];
  godziny: string[];
}

@Component({
  selector: 'app-eye-first-registration',
  templateUrl: './eye-first-registration.component.html',
  styleUrls: ['./eye-first-registration.component.css']
})
export class EyeFirstRegistrationComponent implements OnInit {

  terminy: Terminy[];
  isSubmitted = false;

  constructor(private http: HttpClient, private doctorService: DoctorRegistrationServiceComponent) { }

  ngOnInit(): void {
    this.http.get<Terminy[]>('../../assets/eyefirst.json').subscribe(data => this.terminy = data, err => console.log('błąd'));
  }

  onSubmit(form: NgForm) {
    const wizyta = {"nazwa": "Dr Eye First", "imie": form.value.imie, "nazwisko": form.value.nazwisko, "dzien": form.value.dzien, "godzina": form.value.godzina}
    this.doctorService.emitValue(wizyta);
    this.isSubmitted = true;
    form.reset();
  }

}
