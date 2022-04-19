import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-sap',
  templateUrl: 'sap.html'
})
export class SapPage {
  inputtext:string;
  key:string = 'tree1'

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  saveData(){
    this.storage.set(this.key, this.inputtext)
  }

  loadData(){
    this.storage.get(this.key).then((val) => {
      console.log('Your username is', val);
    });

  }

}
