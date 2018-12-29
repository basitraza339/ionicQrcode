import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {
  
  
  constructor(private afAuth: AngularFireAuth, public afd: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  Login(body) {
  	return this.afAuth.auth.signInWithEmailAndPassword(body.email, body.pin)
  	.then((resp) => {
      console.log(resp.user);
      localStorage.setItem('userLoginId', this.afAuth.auth.currentUser.uid);
       this.afd.object('users/list/'+this.afAuth.auth.currentUser.uid)
      .valueChanges()
      .subscribe(
      data => {
        localStorage.setItem('userData', JSON.stringify(data));
        console.log("data",data);
    })
      return this.afAuth.auth.currentUser.uid;
      
  	}).catch((error) => {
        console.log('Error: ' + error);
        alert('Error: ' + error);
        return false;
    })
  }


  addUser(name) {

    return this.afAuth.auth.createUserWithEmailAndPassword(name.email, name.pin)
    .then((resp) =>  this.afAuth.auth.currentUser.sendEmailVerification()
        .then(() => {
          	delete name.pin;
            console.log('Please verify your email',this.afAuth.auth.currentUser.uid);
            this.afd.object('/users/list/'+ this.afAuth.auth.currentUser.uid).set(name);
            alert('Please verify your email');
            this.logout(false);
            console.log(resp);
        		return true;
        }).catch((error) => {
            console.log('Error: ' + error);
            alert('Error: ' + error);
            return false;
        })
    ).catch((error) => {
            console.log('Error: ' + error);
            alert('Error: ' + error);
            return false;
        });
  }
 
  logout(bool = true) {
       	this.afAuth.auth.signOut().then(function() {
       	    if (bool) {
       	    	alert('SignOut successful');
       	    }
       	}).catch(function(error) {
       	    if (bool) {
       	    	alert('Error: ' + error);
       	    }
       	});
   }

}
