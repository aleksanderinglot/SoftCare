import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration-doctor',
  templateUrl: './registration-doctor.component.html',
  styleUrls: ['./registration-doctor.component.css']
})
export class RegistrationDoctorComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
