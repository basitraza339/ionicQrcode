import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	userId: string = "";
	encodedData: any = {};
  	constructor(public navCtrl: NavController, public scanner: BarcodeScanner) {

  	}

  	ionViewDidLoad() {
  	  console.log('ionViewDidLoad HomePage');
  	  this.userId= localStorage.getItem('userLoginId');
      console.log("Check",this.userId);
  	}

  	encode()
  	{
  		this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.userId).then((data) => {
  			this.encodedData = data;
  		}, (err) => {
  			console.log('Error  :', err);
  		})
  	}

}
