import { EventNotificationData, EventNotificationListData, NotificationData, NotificationFeedEntry } from "./models";

export abstract class AbstractNotificationService {

  abstract fetchNotificationList(): Promise<NotificationFeedEntry<NotificationData|any>[]>;
  
  abstract handleNotificationClick(notificationData: EventNotificationData): void;
  
  abstract deleteNotification(notificationData: EventNotificationData): Promise<boolean>;
  
  abstract clearAllNotifications(notificationListData: EventNotificationListData): Promise<boolean>;

}
