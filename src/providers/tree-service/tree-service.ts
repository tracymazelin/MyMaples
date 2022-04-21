import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


export interface Tree {
  id: number,
  nickname: string,
  location: string, 
  circumference: number,
  number_taps: number;
  tap_date: number;
  comments: string;
}

const TREES_KEY = 'trees';


@Injectable()
export class TreeServiceProvider {
  constructor(private storage: Storage) {
  }

  
  addTree(tree: Tree): Promise<any> {
    return this.storage.get(TREES_KEY).then((trees: Tree[])=>{
      if(trees){
        trees.push(tree);
        return this.storage.set(TREES_KEY, trees);
      } else{
        return this.storage.set(TREES_KEY, [tree])
      }
    })
  
  }

  getTrees(): Promise<Tree[]>{
    return this.storage.get(TREES_KEY)
  }

  editTree(tree: Tree): Promise<any> {
    return this.storage.get(TREES_KEY).then((trees: Tree[])=>{
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
      return this.storage.set(TREES_KEY, newTrees)
    });

    
  }

  deleteTree(id: number): Promise<Tree> {
    return this.storage.get(TREES_KEY).then((trees: Tree[])=>{
      if (!trees || trees.length === 0){
        return null;
      }
      let toKeep: Tree[] = [];
      for(let i of trees){
        if(i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(TREES_KEY, toKeep);
    });
   
  }

}
