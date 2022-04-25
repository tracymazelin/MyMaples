import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { TreeServiceProvider, Tree } from '../../providers/data-service/tree-service';
import { SapServiceProvider, Sap } from '../../providers/data-service/sap-service';

@Component({
  selector: 'page-sap',
  templateUrl: 'sap.html'
})
export class SapPage {
 
  trees: Tree[] = [];
  tree: Tree = <Tree>{};
  saps: Sap[] = [];
  sap: Sap = <Sap>{};

  constructor(public navCtrl: NavController, private sapDataProvider:SapServiceProvider, private navParams: NavParams, 
    private treeDataProvider: TreeServiceProvider, private toastCtrl: ToastController) {
   this.treeDataProvider.getTrees().then((trees) => {
    this.trees = trees;
   })
  }

  addSap(){
    this.sap.id = Date.now();
    this.sapDataProvider.addSap(this.sap).then(() => { 
    })  
    const toast = this.toastCtrl.create({
      message: 'Sap Quantity Added!',
      duration: 3000
    })
    toast.present();
  }
  
  deleteSap(){
    this.sapDataProvider.deleteSap(this.sap.id);
  }
}
