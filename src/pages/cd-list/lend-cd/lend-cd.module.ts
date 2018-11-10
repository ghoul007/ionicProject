import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LendCdPage } from './lend-cd';

@NgModule({
  declarations: [
    LendCdPage,
  ],
  imports: [
    IonicPageModule.forChild(LendCdPage),
  ],
})
export class LendCdPageModule {}
