import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LendBookPage } from './lend-book';

@NgModule({
  declarations: [
    LendBookPage,
  ],
  imports: [
    IonicPageModule.forChild(LendBookPage),
  ],
})
export class LendBookPageModule {}
