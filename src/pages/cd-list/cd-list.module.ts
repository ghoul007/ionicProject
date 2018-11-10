import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CdListPage } from './cd-list';

@NgModule({
  declarations: [
    CdListPage,
  ],
  imports: [
    IonicPageModule.forChild(CdListPage),
  ],
})
export class CdListPageModule {}
