import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { ModalController, Modal, ViewController, NavParams  } from 'ionic-angular';
import { TreeServiceProvider, Tree } from '../../providers/data-service/tree-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  trees: Tree[]
  tree: Tree 
  index: number


  constructor(public storageService: TreeServiceProvider, public view: ViewController, private modal: ModalController, public actionSheet: ActionSheetController, public navParams: NavParams) {
    this.loadTrees();
  }

  openModal(){
    const addTreeModal: Modal = this.modal.create('AddTreePage')
    addTreeModal.present();
    addTreeModal.onDidDismiss(() => {
      this.loadTrees()
    })
    
  }

  loadTrees(){
    this.storageService.getTrees().then(trees => {
      this.trees = trees;
    })
  }

  updateTree(tree: Tree){
    const editTree = this.tree;
    const editTreeModal: Modal = this.modal.create(
      'AddTreePage', {data: editTree})
  
    editTreeModal.present();
    this.storageService.editTree(tree).then(() =>{
      editTreeModal.onDidDismiss(() => {
    })
      this.loadTrees();
    })
  }

  deleteTree(tree: Tree){
    this.storageService.deleteTree(tree.id).then(() =>{
      this.loadTrees();
    })
  }

  getTreeIndex(index: number){
    this.index = index
    this.presentActionSheet()
  }

  presentActionSheet() {
    const actionSheet = this.actionSheet.create({
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.deleteTree(this.trees[this.index])
          }
        },{
          text: 'Edit',
          handler: () => {
            this.updateTree(this.trees[this.index])
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}