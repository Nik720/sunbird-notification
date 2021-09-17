import { EventNotification, Notification, NotificationFeedEntry } from "./models";

export interface SbNotificationService {

  fetchNotificationList(): Promise<any>;
  
  handleNotificationClick(notificationData: any): void;
  
  deleteNotification(notificationData: any): Promise<boolean>;
  
  clearAllNotifications(notificationListData: any): Promise<boolean>;

}


