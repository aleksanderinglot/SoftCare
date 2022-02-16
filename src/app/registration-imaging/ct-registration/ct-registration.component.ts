import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExaminationRegistrationServiceComponent } from '../examination-registration.service';

interface Terminy {
  dzien: string[];
  godziny: string[];
}

@Component({
  selector: 'app-ct-registration',
  templateUrl: './ct-registration.component.html',
  styleUrls: ['./ct-registration.component.css']
})
export class CtRegistrationComponent implements OnInit {

  terminy: Terminy[];
  isSubmitted = false;

  constructor(private http: HttpClient, private examinationService: ExaminationRegistrationServiceComponent) { }

  ngOnInit(): void {
    this.http.get<Terminy[]>('../../assets/terminy2.json').subscribe(data => this.terminy = data, err => console.log('błąd'));
  }

  onSubmit(form: NgForm) {
    const wizyta = {"nazwa": "Badanie CT", "imie": form.value.imie, "nazwisko": form.value.nazwisko, "dzien": form.value.dzien, "godzina": form.value.godzina}
    this.examinationService.emitValue(wizyta);
    this.isSubmitted = true;
    form.reset();
  }

}
