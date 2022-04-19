import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TreeServiceProvider } from '../../providers/tree-service/tree-service';
import { ModalServiceProvider } from '../../providers/modal-service/modal-service';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Trees";
  public location:string ='';
  public circumference:number;
  


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: TreeServiceProvider, 
    public modalService: ModalServiceProvider, private geolocation: Geolocation) {

  }

  getGPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.location = 'Latitude: ' + resp.coords.latitude +' Longitude: ' + resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  

  
}