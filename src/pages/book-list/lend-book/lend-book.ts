import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { dataService } from '../../../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {
  book: any;
  index: any;
  personForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alert: AlertController,
    private dataService: dataService,
    private formBuilder: FormBuilder,
    private view: ViewController,

  ) {
  }


  ngOnInit() {
    this.index = this.navParams.get('index')
    this.book = this.dataService.listBook[this.index]
    this.initForm();
  }

  initForm() {
    this.personForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }


  addPerson() {
    const name = this.personForm.get('name').value;
    this.book['person'] = name;
    this.dataService.emitBook();

  }

  preter() {


    this.alert.create({
      title: "Confirmation",
      message: this.book.isPreter ? "voulez vous rendre ce livre" : "voulez vous preter ce livre",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel clicked')
          }
        },
        {
          text: "confirm",
          handler: () => {
            this.dataService.preter(this.index, 'book');
            this.view.dismiss()
          }
        }
      ]
    }).present()

  }



  dismiss() {
    this.view.dismiss()
  }

}
