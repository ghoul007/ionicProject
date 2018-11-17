import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { BookListPage } from '../pages/book-list/book-list';
import { CdListPage } from '../pages/cd-list/cd-list';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { AuthPage } from '../pages/auth/auth';
import * as firebase from 'firebase'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  isAuth: boolean;
  rootPage: any = TabsPage;

  pages: Array<{ title: string, component: any,icon:string, data?: string, isAuth?: boolean }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let config = {
        apiKey: "AIzaSyCYfMiF9TSQF5D4NevsrpRxsYP3i-NtkrA",
        authDomain: "ionictuto-c2b61.firebaseapp.com",
        databaseURL: "https://ionictuto-c2b61.firebaseio.com",
        projectId: "ionictuto-c2b61",
        storageBucket: "ionictuto-c2b61.appspot.com",
        messagingSenderId: "402105718502"
      };

      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
          this.nav.setRoot(AuthPage,'connect')
        }

        this.initMenu();
      })

      this.initMenu();




      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initMenu() {
    this.pages = [
      { title: 'List', component: TabsPage, icon:'list', data: '', isAuth: this.isAuth },
      { title: 'Settings', component: SettingsPage, icon:'settings', data: '', isAuth: this.isAuth },
      { title: 'Singup', component: AuthPage, icon:'person-add', data: 'inscrire', isAuth: !this.isAuth },
      { title: 'Singin', component: AuthPage, icon:'log-in', data: 'connect', isAuth: !this.isAuth },
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.data) {
      this.nav.setRoot(page.component, page.data);

    } else {
      this.nav.setRoot(page.component);

    }
  }


  logout() {
    firebase.auth().signOut()
  }
}
