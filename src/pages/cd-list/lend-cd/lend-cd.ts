import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { dataService } from '../../../services/data.service';

/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {
  Cd: any;
  index: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dataService: dataService,
    private view: ViewController
  ) {
  }


  ngOnInit() {
    this.index = this.navParams.get('index')
    this.Cd = this.dataService.listCD[this.index]
  }


  preter() {
    this.dataService.preter(this.index, 'cd');
  }


  dismiss() {
    this.view.dismiss()
  }

}
