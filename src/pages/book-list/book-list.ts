import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { dataService } from '../../services/data.service';
import { LendBookPage } from './lend-book/lend-book';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage implements OnInit, OnDestroy {
  books: any[];
  bookSubscription: Subscription

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dataServce: dataService,
    private modal: ModalController
  ) {
  }


  // ionViewWillEnter() {
  ngOnInit() {
    this.bookSubscription = this.dataServce.listBook$.subscribe(
      (res) => {
        this.books = res;
      }
    )
    this.dataServce.emitBook();
  }


  showBook(index) {
    this.modal.create(LendBookPage, { index }).present()
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

}
