export enum PlatformType {
    PORTAL = 'portal',
    MOBILE = 'mobile'
}

export enum NotificationStatus {
    READ = 'read',
    UNREAD = 'unread'
}

export enum NotificationFeedCategory {
    ORG_MIGRATION_ACTION = "OrgMigrationAction",
    NOTIFICATION = "Notification"
}

export interface NotificationViewConfig {
    title: string;
    subTitle: string;
    clearText: string;
    moreText: string;
    lessText: string;
    minNotificationViewCount: number;
}

export interface NotificationFeedEntry<T = any> {
    id: string|number;
    userId?: string|number;
    category?: NotificationFeedCategory | string;
    priority?: number;
    createdBy?: string;
    createdOn?: any;
    channel?: string;
    status: NotificationStatus;
    expireOn?: any;
    data: T;
}

export interface NotificationData {
    id?: string|number;
    type?: number;
    displayTime?: any;
    expiry?: any;
    actionData?: {
        actionType?: string;
        title?: string;
        description?: string;
        identifier?: string;
        richText?: string;
        ctaText?: string;
        deepLink?: string;
        thumbnail?: string;
        banner?: string;
        contentURL?: string;
        openPlayer?: boolean;
    }
}

export interface EventNotificationData {
    event: any;
    data: NotificationFeedEntry<NotificationData|any>
}

export interface EventNotificationListData {
    event: any;
    data: NotificationFeedEntry<NotificationData|any>[]
}