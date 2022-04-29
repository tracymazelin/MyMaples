import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Tree} from './tree-service'

export interface Sap {
  id: number,
  sap: Tree,
  collection_date: number,
  number_gallons: number
}

@Injectable()
export class SapServiceProvider {
  constructor(private storage: Storage) {
  }

  KEY = "saps"  // ie table name
 
  addSap(sap: Sap): Promise<any> {
    return this.storage.get(this.KEY).then((saps: Sap[])=>{
      if(saps){
        saps.push(sap);
        return this.storage.set(this.KEY, saps);
      } else{
        return this.storage.set(this.KEY, [sap])
      }
    })
  }

  getSap(): Promise<Sap[]>{
    return this.storage.get(this.KEY)
  }

  editSap(sap: Sap): Promise<any> {
    return this.storage.get(this.KEY).then((saps: Sap[])=>{
      if (!saps || saps.length === 0){
        return null;
      }
      let newSaps: Sap[] = [];
      for(let i of saps){
        if(i.id ==sap.id){
          newSaps.push(sap);
        }else{
          newSaps.push(i)
        }
      }
      return this.storage.set(this.KEY, newSaps)
    });
  }


  deleteSap(id: number): Promise<Sap> {
    return this.storage.get(this.KEY).then((saps: Sap[])=>{
      if (!saps || saps.length === 0){
        return null;
      }
      let toKeep: Sap[] = [];
      for(let i of saps){
        if(i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(this.KEY, toKeep);
    });   
  }
}
