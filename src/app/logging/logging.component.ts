import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggingResponseData, LoggingService } from './logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private loggingService: LoggingService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {

    // if (!form.valid) {
    //   return;
    // }

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    let loggingObs: Observable<LoggingResponseData>;

    if (this.isLoginMode) {
      loggingObs = this.loggingService.login(email, password);
    } else {
      loggingObs = this.loggingService.signup(email, password);
    }

    loggingObs.subscribe(
      responseData => {
        console.log(responseData);
        this.isLoading = false;
        this.router.navigate(['/description']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
