import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { NotificationCardComponent } from './notification-card/notification-card.component';

@NgModule({
  declarations: [
    NotificationComponent,
    NotificationCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationComponent,
    NotificationCardComponent
  ]
})
export class SbNotificationModule {
  static forRoot(sbNotificationService): ModuleWithProviders<any> {
    return {
      ngModule: SbNotificationModule,
      providers: [
        {provide: 'SB_NOTIFICATION_SERVICE', useClass: sbNotificationService}
      ]
    };
  }
}
