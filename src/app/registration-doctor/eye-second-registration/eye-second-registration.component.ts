import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorRegistrationServiceComponent } from '../doctor-registration.service';

interface Terminy {
  dzien: string[];
  godziny: string[];
}

@Component({
  selector: 'app-eye-second-registration',
  templateUrl: './eye-second-registration.component.html',
  styleUrls: ['./eye-second-registration.component.css']
})
export class EyeSecondRegistrationComponent implements OnInit {

  terminy: Terminy[];
  isSubmitted = false;

  constructor(private http: HttpClient, private doctorService: DoctorRegistrationServiceComponent) { }

  ngOnInit(): void {
    this.http.get<Terminy[]>('../../assets/eyesecond.json').subscribe(data => this.terminy = data, err => console.log('błąd'));
  }

  onSubmit(form: NgForm) {
    const wizyta = {"nazwa": "Dr Eye Second", "imie": form.value.imie, "nazwisko": form.value.nazwisko, "dzien": form.value.dzien, "godzina": form.value.godzina}
    this.doctorService.emitValue(wizyta);
    this.isSubmitted = true;
    form.reset();
  }

}
