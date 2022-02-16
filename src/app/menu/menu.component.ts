import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging/logging.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  isAuthenticated = false;

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
    this.userSubscription = this.loggingService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onLogout() {
    this.loggingService.logout();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
