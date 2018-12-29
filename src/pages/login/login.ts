import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
	   email: string;
  	 pin: string;
     options : BarcodeScannerOptions;
     scannedData: any = {};
     results : {};


  	constructor(public navCtrl: NavController, 
      public navParams: NavParams, 
      public afd: AngularFireDatabase,
      public firebaseServiceProvider: FirebaseServiceProvider,
      public scanner: BarcodeScanner) {
  	}

  	ionViewDidLoad() {
  	  console.log('ionViewDidLoad LoginPage');
  	}
    newPage(id)
    {
      this.afd.object('users/list/'+id)
        .valueChanges()
        .subscribe(
        data => {
          localStorage.setItem('userData', JSON.stringify(data));
          localStorage.setItem('userLoginId', id);
          console.log("data",data);
          this.navCtrl.setRoot(HomePage);
        })
    }
    scan()
    {
      this.options= {
        prompt: 'Scan you barcode'
      };
      this.scanner.scan(this.options).then((data) => {
        this.scannedData = data;
        this.results = this.scannedData['text'];
        alert("Results of QR code: "+this.results);
        this.newPage(this.results);
      }, (err) => {
        console.log('Error  :', err);
      })
    }

  	loggedIn(){
  		console.log('loggedIn');
  		let body = {
       		email: this.email,
       		pin : this.pin
     	};
      this.firebaseServiceProvider.Login(body)
      .then(res => {
        console.log(res);
        if(res)
        {
          console.log(res);
          this.navCtrl.setRoot(HomePage);
        }
      });
  	}

    showRegister(){
      this.navCtrl.push(RegisterPage);
    }

}
