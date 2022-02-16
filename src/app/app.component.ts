import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Soft-care';

  constructor(private loggingService: LoggingService) {}

  ngOnInit() {
    this.loggingService.autoLogin();
  }
}
