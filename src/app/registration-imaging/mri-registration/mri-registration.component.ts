import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExaminationRegistrationServiceComponent } from '../examination-registration.service';

interface Terminy {
  dzien: string[];
  godziny: string[];
}

@Component({
  selector: 'app-mri-registration',
  templateUrl: './mri-registration.component.html',
  styleUrls: ['./mri-registration.component.css']
})
export class MriRegistrationComponent implements OnInit {

  terminy: Terminy[];
  isSubmitted = false;

  constructor(private http: HttpClient, private examinationService: ExaminationRegistrationServiceComponent) { }

  ngOnInit(): void {
    this.http.get<Terminy[]>('../../assets/terminy3.json').subscribe(data => this.terminy = data, err => console.log('błąd'));
  }

  onSubmit(form: NgForm) {
    const wizyta = {"nazwa": "Badanie MRI", "imie": form.value.imie, "nazwisko": form.value.nazwisko, "dzien": form.value.dzien, "godzina": form.value.godzina}
    this.examinationService.emitValue(wizyta);
    this.isSubmitted = true;
    form.reset();
  }

}

