import { NotificationViewConfig, Notification, NotificationFeedEntry, NotificationStatus } from "./models";

export const notificationList: NotificationFeedEntry<Notification>[] = [
  {
    data: {
      actionData: {
        actionType: 'contentURL',
        contentURL: 'https://url/resources/play/content/do_00000',
        description: 'Notfication description 1',
        openPlayer: true,
        title: 'InApp Notification 1',
        thumbnail: ''
      },
      type: 1
    },
    id: 'id1',
    category: 'Notification',
    priority: 1,
    userId: 'user-id',
    createdOn: 1605589382634,
    status: NotificationStatus.UNREAD
  },
  {
    data: {
      actionData: {
        actionType: 'contentURL',
        contentURL: 'https://url/resources/play/content/do_00000',
        description: 'Notfication description 2',
        openPlayer: true,
        title: 'InApp Notification 2',
        thumbnail: ''
      },
      type: 1
    },
    id: 'id2',
    category: 'Notification',
    priority: 1,
    userId: 'user-id',
    createdOn: 1605589382634,
    status: NotificationStatus.READ
  }
];

export const notificationViewConfig: NotificationViewConfig = {
  title: 'Notification',
  subTitle: 'New Notification (s)',
  clearText: 'Clear',
  moreText: 'See more',
  lessText: 'See less',
  minNotificationViewCount: 5
}