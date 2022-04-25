import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SapServiceProvider } from '../../providers/data-service/sap-service';

@Component({
  selector: 'page-metrics',
  templateUrl: 'metrics.html'
})
export class MetricsPage {

  sapData 
  totals
  grandTotal = 0

  constructor(public navCtrl: NavController, private sapDataProvider: SapServiceProvider) {
      
  }

  ionViewWillLoad() {
    this.calculateTotalSapByTree() 
  }

  calculateTotalSapByTree(){
    this.sapDataProvider.getSap().then((sap) => {
      this.sapData = sap;
      if (this.sapData){
        this.totals = Object.values(
          this.sapData.reduce((accumulate,current)=>{
            accumulate[current.tree] = accumulate[current.tree] || {...current, number_gallons: 0};
            accumulate[current.tree].number_gallons += Number(current.number_gallons);
          return accumulate;
          }, {})
        ); 
        this.calculateGrandTotal()   
      }
     });
  }

  calculateGrandTotal(){
      this.totals.forEach(element => {
        this.grandTotal += element.number_gallons
      });
    }
  
}
