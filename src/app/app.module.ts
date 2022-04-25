import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { SapPage } from '../pages/sap/sap';
import { MetricsPage } from '../pages/metrics/metrics';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TreeServiceProvider } from '../providers/data-service/tree-service';
import { SapServiceProvider } from '../providers/data-service/sap-service';
import { IonicStorageModule } from '@ionic/storage';
import { AppProvider } from '../providers/app/app';


@NgModule({
  declarations: [
    MyApp,
    SapPage,
    MetricsPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mymaples',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SapPage,
    MetricsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TreeServiceProvider,
    SapServiceProvider,
    Geolocation,
    AppProvider,
  ]
})
export class AppModule {}