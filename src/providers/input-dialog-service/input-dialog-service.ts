import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { TreeServiceProvider } from '../../providers/tree-service/tree-service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {
  constructor(public alertCtrl: AlertController, public dataService: TreeServiceProvider, private geolocation: Geolocation ) {
    console.log('Hello InputDialogServiceProvider Provider');
    
  }

  showPrompt(tree?, index?) {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Latitude=" +resp.coords.latitude)
      console.log("Longitude=" +resp.coords.longitude)
     }).catch((error) => {
       console.log('Error getting location', error);
     });

   
    
    const prompt = this.alertCtrl.create({
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
              this.dataService.editTree(tree, index);
            }
            else {
              this.dataService.addTree(tree);
            }

          }
        }
      ]
    });
    prompt.present();
  }
}