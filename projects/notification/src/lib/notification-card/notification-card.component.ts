import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { notificationData } from './notification-card-data';
import { Notification, NotificationFeedEntry, NotificationStatus } from '../models';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'sb-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss']
})
export class NotificationCardComponent implements OnChanges {

  @Input() notification: NotificationFeedEntry<Notification|any> = notificationData;
  NotificationStatus = NotificationStatus;

  constructor(
    @Inject('NOTIFICATION_SERVICE') protected notificationService: NotificationService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.notification) {
      this.notification = changes.notification.currentValue;
    }
  }

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
