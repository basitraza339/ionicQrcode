import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	userData: string = "";
	name: string;
    email: string;
    number: number;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	}
	
  	ionViewDidLoad() {
  	  console.log('ionViewDidLoad ProfilePage');
  	  this.userData= localStorage.getItem('userData');
  	  console.log("Check1",JSON.parse(this.userData));
  	  if(this.userData)
      {
        var a=JSON.parse(this.userData);
        this.email=a.email;
        this.number=a.number;
        this.name=a.name;
      }
  	}

}
