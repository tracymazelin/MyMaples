import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SapPage } from '../pages/sap/sap';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InputDialogServiceProvider } from '../providers/input-dialog-service/input-dialog-service';
import { TreeServiceProvider } from '../providers/tree-service/tree-service';
import { ModalServiceProvider } from '../providers/modal-service/modal-service';

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
    IonicModule.forRoot(MyApp)
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
    Geolocation,
    ModalServiceProvider
  ]
})
export class AppModule {}
