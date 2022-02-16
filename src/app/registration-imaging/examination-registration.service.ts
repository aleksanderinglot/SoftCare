import { BehaviorSubject } from "rxjs";

interface Wizyta {
    nazwa: string;
    imie: string;
    nazwisko: string;
    dzien: string;
    godzina: string;
}

export class ExaminationRegistrationServiceComponent {
    subject = new BehaviorSubject<Wizyta[]>(null);

    dane: Wizyta;
    wizyty: Wizyta[] = [];


    emitValue(data) {
        this.wizyty.push(data);
        this.subject.next(this.wizyty);
    }
}