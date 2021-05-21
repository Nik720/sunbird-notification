import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NotificationViewConfig, NotificationFeedEntry, Notification } from './models';
import { NotificationService } from './notification.service';
import { notificationViewConfig } from './notification-data';

@Component({
  selector: 'sb-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnChanges {

  @Input() notificationList: NotificationFeedEntry<Notification|any>[] = [];
  @Input() inAppNotificationConfig: NotificationViewConfig = notificationViewConfig;
  @Output() showMore: EventEmitter<any> = new EventEmitter();
  @Output() showLess: EventEmitter<any> = new EventEmitter();
  displayItemCount: number;

  constructor(
    @Inject('NOTIFICATION_SERVICE') protected notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.displayItemCount = this.inAppNotificationConfig.minNotificationViewCount;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.notificationList) {
      this.notificationList = changes.notificationList.currentValue;
    }

    if (changes.inAppNotificationConfig) {
      this.inAppNotificationConfig = changes.inAppNotificationConfig.currentValue;
    }
  }

  clearAllNotifications(event) {
    const eventData = {
      event,
      data: this.notificationList
    };
    this.notificationService.clearAllNotifications(eventData);
  }

  onShowMore() {
    this.showMore.emit(true);
    if (this.notificationList.length) {
      this.displayItemCount = this.notificationList.length;
    }
  }

  onShowLess() {
    this.showLess.emit(true);
    this.displayItemCount = this.inAppNotificationConfig.minNotificationViewCount;
  }

}
