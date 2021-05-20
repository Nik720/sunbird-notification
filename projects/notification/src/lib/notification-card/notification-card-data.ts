import { NotificationData, NotificationFeedEntry, NotificationStatus } from "../models";

export const notificationData: NotificationFeedEntry<NotificationData> = {
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
};
