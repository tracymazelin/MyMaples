import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServiceProvider, Tree } from '../../providers/data-service/data-service';



@Component({
  selector: 'page-sap',
  templateUrl: 'sap.html'
})
export class SapPage {
 
  trees: Tree[] = [];
  
  constructor(public navCtrl: NavController, private treeProvider:DataServiceProvider) {
    this.treeProvider.getTrees()
  }

  addSap(){

  }

}
