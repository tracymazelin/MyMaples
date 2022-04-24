import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, Platform, ToastController, ModalController, LoadingController } from 'ionic-angular';
import { DataServiceProvider, Tree } from '../../providers/data-service/data-service';
import { Geolocation } from '@ionic-native/geolocation';


import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddTreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-tree',
  templateUrl: 'add-tree.html',
})
export class AddTreePage {

  trees: Tree[] = [];
  tree: Tree = <Tree>{};

  constructor(public view: ViewController, private navParams: NavParams, private plt: Platform, public toastCtrl: ToastController, 
   private storage: Storage, public loadingCtrl: LoadingController, private modal: ModalController, public storageService: DataServiceProvider, private geolocation: Geolocation) {
    
    this.tree.id = Date.now();
    this.getGPS();
  }

  closeModal(){
    this.view.dismiss();
  }

  
  getGPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.tree.longitude = resp.coords.longitude,
      this.tree.latitude = resp.coords.latitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  addTree(){
    this.storageService.addTree(this.tree).then(tree => { 
    })  
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log(this.tree)
  }

  calculateNumberOfTaps(){
    const diameter = (this.tree.circumference)/Math.PI
    if (diameter <= 12) {
      this.tree.number_taps = 0
      const toast = this.toastCtrl.create({
        message: 'This tree is too small to tap!',
        duration: 3000
      })
      toast.present();
      
    }
    else if (diameter >= 13 && diameter <= 20){
      this.tree.number_taps = 1
    } else if (diameter >= 21 && diameter <= 27) {
      this.tree.number_taps = 2
    } else if (diameter >= 28 ){
      this.tree.number_taps = 3
    }
    
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Fetching GeoLocation..",
      duration: 3000
    });
    loader.present();
  }
}
