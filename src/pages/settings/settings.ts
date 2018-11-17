import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { dataService } from '../../services/data.service';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    private dataService: dataService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  sauvgarderBook() {
    this.dataService.sauvgardeBookToBE().then(
      () => {
        console.log('sauvgarde avec succes')
      }
    ).catch((error) => {
      console.log('error', error)
    });
  }


  recupererBook() {
    this.dataService.fetchBookBE().then(
      () => {
        console.log('recuprere avec succes')
      }
    ).catch((error) => {
      console.log('error', error)
    });
  }

  sauvgarderCD() {
    this.dataService.sauvgardeCDToBE().then(
      () => {
        console.log('sauvgarde avec succes')
      }
    ).catch((error) => {
      console.log('error', error)
    });
  }


  recupererCD() {
    this.dataService.fetchCdBE().then(
      () => {
        console.log('recuperer avec succes')
      }
    ).catch((error) => {
      console.log('error', error)
    });
  }
}
