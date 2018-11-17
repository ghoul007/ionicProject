import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { dataService } from '../../../services/data.service';
import { Validators, FormBuilder } from '@angular/forms';

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
  personForm: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alert: AlertController,
    private formBuilder: FormBuilder,
    private dataService: dataService,
    private view: ViewController
  ) {
  }


  ngOnInit() {
    this.index = this.navParams.get('index')
    this.Cd = this.dataService.listCD[this.index]
    this.initForm();
  }

  initForm() {
    this.personForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }


  preter() {

    this.alert.create({
      title: "Confirmation",
      message: this.Cd.isPreter ? "voulez vous rendre ce CD" : "voulez vous preter ce CD",
      buttons:[
        {
          text:'Cancel',
          role: 'cancel',
          handler:()=>{
            console.log('cancel clicked')
          }
        },
        {
          text:"confirm",
          handler: ()=>{
            this.dataService.preter(this.index, 'cd');
            this.view.dismiss()
          }
        }
      ]
    }).present()
  }

  addPerson() {
    const name = this.personForm.get('name').value;
    this.Cd['person'] = name;
    this.dataService.emitCD();

  }


  dismiss() {
    this.view.dismiss()
  }

}
