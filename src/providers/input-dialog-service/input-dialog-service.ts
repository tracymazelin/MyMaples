import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { TreeServiceProvider } from '../../providers/tree-service/tree-service';


/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {
  constructor(public modalCtrl: ModalController, public dataService: TreeServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
    
  }

  showPrompt(tree?, index?) {
    const modal = this.modalCtrl.create({
      title: tree ? 'Edit Tree' : 'Add Tree',
      message: tree ? "Please edit tree..." : "Please enter tree...",
      inputs: [
        {
          name: 'location',
          placeholder: 'Location',
          value: tree ? tree.location : null
        },
        {
          name: 'circumference',
          placeholder: 'Circumference',
          value: tree ? tree.circumference : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: tree => {
            console.log('Saved clicked', tree);
            if (index !== undefined) {
              this.dataService.editTree(tree);
            }
            else {
              this.dataService.addTree(tree);
            }

          }
        }
      ]
    });
    modal.present();
  }
}