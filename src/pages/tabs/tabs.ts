import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookListPage } from '../book-list/book-list';
import { CdListPage } from '../cd-list/cd-list';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = BookListPage
  tab2Root = CdListPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
}
