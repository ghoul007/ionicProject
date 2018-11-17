import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage implements OnInit {
  mode: boolean;
  authForm: FormGroup;
  errorMessage: string = ""
  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private loader: LoadingController,
    private authSrevice: AuthService,
    public navParams: NavParams) {
  }

  ngOnInit() {
    this.mode = (this.navParams.data == 'connect') ? true : false;
    this.initForm();
  }

  initForm() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  soumettre() {


    // this.loader.create({ spinner: true }).present();
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    if (this.navParams.data == 'connect') {
      this.authSrevice.signin(email, password).then(
        (user) => {
          this.toast.create({ message: 'authentication success', duration: 3000, position: "bottom" }).present();
          this.navCtrl.setRoot(TabsPage)
        }
      ).catch((error) => {
        this.toast.create({ message: error, duration: 3000, position: "bottom" }).present();
        this.errorMessage = error
      })
    } else if (this.navParams.data == 'inscrire') {
      this.authSrevice.signup(email, password).then(
        (user) => {
          this.toast.create({ message: 'authentication success', duration: 3000, position: "bottom" }).present();
          this.navCtrl.setRoot(TabsPage)
        }
      ).catch((error) => {
        this.toast.create({ message: error, duration: 3000, position: "bottom" }).present();
        this.errorMessage = error
      })
    }

  }


}
