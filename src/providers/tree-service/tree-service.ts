import { Injectable } from '@angular/core';

/*
  Generated class for the TreeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TreeServiceProvider {

  trees = [];

  constructor() {
    console.log('Hello TreeServiceProvider Provider');
  }

  getTrees() {
    return this.trees;
  }

  removeTree(index) {
    this.trees.splice(index, 1);
  }

  addTree(tree) {
    this.trees.push(tree);
  }

  editTree(tree, index) {
    this.trees[index] = tree;
  }

}
