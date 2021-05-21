import { EventNotification, EventNotificationList, Notification, NotificationFeedEntry } from "./models";

export abstract class AbstractNotificationService {

  abstract fetchNotificationList(): Promise<NotificationFeedEntry<Notification|any>[]>;
  
  abstract handleNotificationClick(notificationData: EventNotification): void;
  
  abstract deleteNotification(notificationData: EventNotification): Promise<boolean>;
  
  abstract clearAllNotifications(notificationListData: EventNotificationList): Promise<boolean>;

}
