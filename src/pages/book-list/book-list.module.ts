import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookListPage } from './book-list';

@NgModule({
  declarations: [
    BookListPage,
  ],
  imports: [
    IonicPageModule.forChild(BookListPage),
  ],
})
export class BookListPageModule {}
