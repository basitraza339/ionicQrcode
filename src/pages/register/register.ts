
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
// import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
    // shoppingItems: FirebaseListObservable<any[]>;
    name: string;
    email: string;
  	pin: string;
    number: number;
  	constructor( public navCtrl: NavController, public navParams: NavParams,  public firebaseServiceProvider: FirebaseServiceProvider) {
  	}
	
  	ionViewDidLoad() {
  	  console.log('ionViewDidLoad RegisterPage');
  	}

  	registerSubmit(){
      
  		console.log('registerSubmit');
  		let body = {
          name: this.name,
       		email: this.email,
       		pin : this.pin,
          number: this.number
     	};
      this.firebaseServiceProvider.addUser(body)
      .then(res => {
        console.log(res);
        if(res)
        {
          this.navCtrl.setRoot(LoginPage);
        }
        
      });
      
      
     	console.log(body);;
  	}

}
