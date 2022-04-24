import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Tree {
  id: number,
  latitude: number,
  longitude: number
  nickname: string,
  circumference: number,
  number_taps: number;
  tap_date: number;
  comments: string;
}

@Injectable()
export class DataServiceProvider {
  constructor(private storage: Storage) {
   
  }

  //KEY = this.itemKey;
  KEY = "trees"
  
  addTree(tree: Tree): Promise<any> {
    return this.storage.get(this.KEY).then((trees: Tree[])=>{
      if(trees){
        trees.push(tree);
        return this.storage.set(this.KEY, trees);
      } else{
        return this.storage.set(this.KEY, [tree])
      }
    })
  
  }

  getTrees(): Promise<Tree[]>{
    return this.storage.get(this.KEY)
  }

  editTree(tree: Tree): Promise<any> {
    return this.storage.get(this.KEY).then((trees: Tree[])=>{
      if (!trees || trees.length === 0){
        return null;
      }
      let newTrees: Tree[] = [];
      for(let i of trees){
        if(i.id ==tree.id){
          newTrees.push(tree);
        }else{
          newTrees.push(i)
        }
      }
      return this.storage.set(this.KEY, newTrees)
    });
  }

  deleteTree(id: number): Promise<Tree> {
    return this.storage.get(this.KEY).then((trees: Tree[])=>{
      if (!trees || trees.length === 0){
        return null;
      }
      let toKeep: Tree[] = [];
      for(let i of trees){
        if(i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(this.KEY, toKeep);
    });   
  }
}
