import { Component } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';

import { TreeServiceProvider, Tree } from '../../providers/tree-service/tree-service';

import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Trees";
  trees: Tree[] = [];
  newTree: Tree = <Tree>{};


  constructor(public navCtrl: NavController, private plt: Platform, public toastCtrl: ToastController, public storageService: TreeServiceProvider, 
     private geolocation: Geolocation, private alertCtrl: AlertController, private storage: Storage, public loadingCtrl: LoadingController) {
    
      this.plt.ready().then(() => {
        this.loadTrees();
        this.getGPS();
        this.presentLoading();
      })
  }

  getGPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.newTree.location = 'Latitude: ' + resp.coords.latitude +', Longitude: ' + resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  //CREATE
  addTree(){
    this.newTree.id = Date.now();
    this.storageService.addTree(this.newTree).then(tree => {
      this.newTree = <Tree>{};
      //this.showToast('Tree added!')
      this.loadTrees();
    })
  }

  //READ
  loadTrees(){
    this.storageService.getTrees().then(trees => {
      this.trees = trees;
    })
  }

  //UPDATE
  updateTree(tree: Tree){
    this.storageService.editTree(tree).then(() =>{
      this.loadTrees();
    })
  }

  //DELETE
  deleteTree(tree: Tree){
    this.storageService.deleteTree(tree.id).then(() =>{
      this.loadTrees();
    })
  }
}