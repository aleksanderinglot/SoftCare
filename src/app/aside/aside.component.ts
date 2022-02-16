import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging/logging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  private userSubscription: Subscription;
  isAuthenticated = false;

  constructor(private loggingService: LoggingService, private router: Router) { }

  ngOnInit() {
    this.userSubscription = this.loggingService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onLogout($event) {
    event.stopPropagation();
    this.loggingService.logout();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onClick($event) {
    this.router.navigate(['/medical-appointments']);
    event.stopPropagation();
  }

  onClick2($event) {
    this.router.navigate(['/examination-appointments']);
    event.stopPropagation();
  }
}
