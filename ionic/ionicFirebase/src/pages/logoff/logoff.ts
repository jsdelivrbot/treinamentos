import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the LogoffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logoff',
  templateUrl: 'logoff.html',
})
export class LogoffPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {

  }


  ionViewDidEnter(){
      this.auth.logout();
  }


}
