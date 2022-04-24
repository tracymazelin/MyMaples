import { Component } from '@angular/core';
import { ModalController, Modal, ViewController  } from 'ionic-angular';
import { DataServiceProvider, Tree } from '../../providers/data-service/data-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  trees: Tree[] 
  

  constructor(public storageService: DataServiceProvider, public view: ViewController, private modal: ModalController) {
    this.loadTrees();
   
  }

  openModal(){
    const addTreeModal: Modal = this.modal.create('AddTreePage')
    
    addTreeModal.present();
    addTreeModal.onDidDismiss(() => {
      this.loadTrees()
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