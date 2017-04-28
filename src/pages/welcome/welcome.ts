import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Form } from './../form/form';

/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {
  public name:any="";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.data.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome');
  }
  next(){
  let data = {
    name:this.name.value
  };
    this.navCtrl.push(Form,data)
  }

}
