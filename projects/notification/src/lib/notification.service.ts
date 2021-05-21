import { EventNotification, EventNotificationList, Notification, NotificationFeedEntry } from "./models";

export interface NotificationService {

  fetchNotificationList(): Promise<NotificationFeedEntry<Notification|any>[]>;
  
  handleNotificationClick(notificationData: EventNotification): void;
  
  deleteNotification(notificationData: EventNotification): Promise<boolean>;
  
  clearAllNotifications(notificationListData: EventNotificationList): Promise<boolean>;

}
