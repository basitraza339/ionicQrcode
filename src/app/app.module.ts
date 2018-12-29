import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

const firebaseConfig = {
    apiKey: "AIzaSyC1fTJXtRpyqW-YI8Y_Ra37_QXZ_OQO6pY",
    authDomain: "test-5ef5d.firebaseapp.com",
    databaseURL: "https://test-5ef5d.firebaseio.com",
    projectId: "test-5ef5d",
    storageBucket: "test-5ef5d.appspot.com",
    messagingSenderId: "373135991065"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    FirebaseServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
