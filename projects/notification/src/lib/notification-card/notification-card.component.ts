import { Component, Inject, Input } from '@angular/core';
import { notificationData } from './notification-card-data';
import { NotificationData, NotificationFeedEntry, NotificationStatus } from '../models';
import { AbstractNotificationService } from '../abstract-notification.service';

@Component({
  selector: 'sb-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss']
})
export class NotificationCardComponent {

  @Input() notification: NotificationFeedEntry<NotificationData|any> = notificationData;
  NotificationStatus = NotificationStatus;

  constructor(
    @Inject('NOTIFICATION_SERVICE') protected notificationService: AbstractNotificationService
  ) { }

  notificationClickHandler(event) {
    const eventData = {
      event,
      data: this.notification
    };
    this.notificationService.handleNotificationClick(eventData);
  }

  notificationDeleteHandler(event) {
    const eventData = {
      event,
      data: this.notification
    };
    this.notificationService.deleteNotification(eventData);
  }

}
