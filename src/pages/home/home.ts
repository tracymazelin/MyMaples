import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TreeServiceProvider } from '../../providers/tree-service/tree-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Trees";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: TreeServiceProvider, public inputDialogService: InputDialogServiceProvider) {

  }

  loadTrees() {
    return this.dataService.getTrees();
  }

  removeTree(tree, index) {
    console.log("Removing Item - ", tree, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeTree(index);  
  }

  
  editTree(tree, index) {
    console.log("Edit Tree - ", tree, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Tree - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(tree, index);
  }  

  addTree() {
    console.log("Adding Tree");
    this.inputDialogService.showPrompt();
  }
}