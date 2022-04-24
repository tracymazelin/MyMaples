import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTreePage } from './add-tree';

@NgModule({
  declarations: [
    AddTreePage,
  ],
  imports: [
    IonicPageModule.forChild(AddTreePage),
  ],
})
export class AddTreePageModule {}
