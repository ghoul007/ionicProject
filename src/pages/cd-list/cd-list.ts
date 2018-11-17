import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { dataService } from '../../services/data.service';
import { LendCdPage } from './lend-cd/lend-cd';
import { Subscription } from 'rxjs/Subscription';


@IonicPage()
@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage implements OnInit, OnDestroy {
  CDs: any;
  CDSubpscription: Subscription

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dataService: dataService,
    private modal: ModalController
  ) {
  }


  // ionViewWillEnter() {
  ngOnInit() {
  this.CDSubpscription =  this.dataService.listCD$.subscribe(
      (res) => {
        this.CDs = res;
      }
    )
    this.dataService.emitCD();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CdListPage');
  }

  showCD(index) {
    this.modal.create(LendCdPage, { index }).present()
  }


  ngOnDestroy(){
    this.CDSubpscription.unsubscribe();
  }
}
