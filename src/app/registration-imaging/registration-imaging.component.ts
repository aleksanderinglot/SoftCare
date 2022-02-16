import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-registration-imaging',
  templateUrl: './registration-imaging.component.html',
  styleUrls: ['./registration-imaging.component.css']
})

export class RegistrationImagingComponent implements OnInit {

  

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
