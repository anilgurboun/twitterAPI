import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';

import { SettingsPage } from './settings';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    ChartsModule,
    IonicPageModule.forChild(SettingsPage),
    TranslateModule.forChild()
  ],
  exports: [
    SettingsPage
  ]
})
export class SettingsPageModule { }
