import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';

import { SapPage } from '../pages/sap/sap';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InputDialogServiceProvider } from '../providers/input-dialog-service/input-dialog-service';
import { TreeServiceProvider } from '../providers/tree-service/tree-service';
import { ModalServiceProvider } from '../providers/modal-service/modal-service';
import { IonicStorageModule } from '@ionic/storage';
import { ModalController, NavParams } from 'ionic-angular';

@NgModule({
  declarations: [
    MyApp,
    SapPage,
    AboutPage,
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
    AboutPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InputDialogServiceProvider,
    TreeServiceProvider,
    ModalServiceProvider,
    Geolocation
  ]
})
export class AppModule {}
